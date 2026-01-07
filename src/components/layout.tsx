import { useState, useEffect, useRef, type ReactNode } from 'react';
import Navbar from './navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const glRef = useRef<WebGL2RenderingContext | null>(null);
    const programRef = useRef<WebGLProgram | null>(null);
    const animationRef = useRef<number>(0);
    const startTimeRef = useRef<number>(Date.now());

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl2');
        if (!gl) {
            console.error('WebGL2 not supported');
            return;
        }
        glRef.current = gl;

        const vertexShaderSource = `#version 300 es
            in vec2 a_position;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;
        // adopted: https://www.shadertoy.com/view/tXy3DK
        // this guy is awesome. i could not get this right
        const fragmentShaderSource = `#version 300 es
            precision highp float;
            
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform vec3 u_color1;
            uniform vec3 u_color2;
            uniform vec3 u_color3;
            uniform vec3 u_color4;
            uniform sampler2D u_noise;
            
            out vec4 fragColor;
            
            #define THRESHOLD .99
            #define DUST
            #define MIN_DIST .13
            #define MAX_DIST 40.
            #define MAX_DRAWS 40
            #define SHAPES_IN_FRONT
            
            float hash12(vec2 p) {
                uvec2 q = uvec2(ivec2(p)) * uvec2(1597334673u, 3812015801u);
                uint n = (q.x ^ q.y) * 1597334673u;
                return float(n) * 2.328306437080797e-10;
            }
            
            float hash13(vec3 p) {
                uvec3 q = uvec3(ivec3(p)) * uvec3(1597334673u, 3812015801u, 2798796415u);
                uint n = (q.x ^ q.y ^ q.z) * 1597334673u;
                return float(n) * 2.328306437080797e-10;
            }
            
            float value2d(vec2 p);
            
            float get_stars_rough(vec2 p) {
                float s = smoothstep(THRESHOLD, 1., hash12(p));
                if (s >= THRESHOLD) 
                    s = pow((s - THRESHOLD) / (1. - THRESHOLD), 10.);
                return s;
            }
            
            float get_stars(vec2 p, float a, float t) {
                vec2 pg = floor(p), pc = p - pg, k = vec2(0, 1);
                pc *= pc * pc * (3. - 2. * pc);
                
                float s = mix(
                    mix(get_stars_rough(pg + k.xx), get_stars_rough(pg + k.yx), pc.x),
                    mix(get_stars_rough(pg + k.xy), get_stars_rough(pg + k.yy), pc.x),
                    pc.y
                );
                return smoothstep(a, a + t, s) * pow(value2d(p * .1 + u_time) * .5 + .5, 8.3);
            }
            
            float value2d(vec2 p) {
                vec2 pg = floor(p), pc = p - pg, k = vec2(0, 1);
                pc *= pc * pc * (3. - 2. * pc);
                return mix(
                    mix(hash12(pg + k.xx), hash12(pg + k.yx), pc.x),
                    mix(hash12(pg + k.xy), hash12(pg + k.yy), pc.x),
                    pc.y
                );
            }
            
            float get_dust(vec2 p, vec2 size, float f) {
                vec2 ar = vec2(u_resolution.x / u_resolution.y, 1);
                vec2 pp = p * size * ar;
                return 
                    pow(.64 + .46 * cos(p.x * 6.28), 1.7) * f *
                    (get_stars(.15 * pp + u_time * vec2(25., -10.1), .11, .71) * 3.5);
            }
            
            float sdSphere(vec3 p, float r) {
                return length(p) - r;
            }
            
            float sdBox(vec3 p, vec3 b) {
                vec3 q = abs(p) - b;
                return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
            }
            
            float sdPyramid(vec3 p, float h) {
                float m2 = h * h + 0.25;
                p.xz = abs(p.xz);
                p.xz = (p.z > p.x) ? p.zx : p.xz;
                p.xz -= 0.5;
                vec3 q = vec3(p.z, h * p.y - 0.5 * p.x, h * p.x + 0.5 * p.y);
                float s = max(-q.x, 0.0);
                float t = clamp((q.y - 0.5 * p.z) / (m2 + 0.25), 0.0, 1.0);
                float a = m2 * (q.x + s) * (q.x + s) + q.y * q.y;
                float b = m2 * (q.x + 0.5 * t) * (q.x + 0.5 * t) + (q.y - m2 * t) * (q.y - m2 * t);
                float d2 = min(q.y, -q.x * m2 - q.y * 0.5) > 0.0 ? 0.0 : min(a, b);
                return sqrt((d2 + q.z * q.z) / m2) * sign(max(q.z, -p.y));
            }
            
            float sdX(vec3 p, float s) {
                p = abs(p);
                float d1 = max(max(p.x - s, p.y - s * 3.0), abs(p.z) - s);
                float d2 = max(max(p.x - s * 3.0, p.y - s), abs(p.z) - s);
                return min(d1, d2);
            }
            
            mat2 rot2D(float a) {
                float c = cos(a), s = sin(a);
                return mat2(c, -s, s, c);
            }
            
            float sdf_wave(vec3 p) {
                p *= 2.;
                float o = 
                    4.2 * sin(.05 * p.x + u_time * .25) +
                    (.04 * p.z) *
                    sin(p.x * .11 + u_time) *
                    2. * sin(p.z * .2 + u_time) *
                    value2d(vec2(.03, .4) * p.xz + vec2(u_time * .5, 0));
                return abs(dot(p, normalize(vec3(0, 1, 0.05))) + 2.5 + o * .5);
            }
            
            float sdf_shapes(vec3 p, out float shapeType) {
                float d = MAX_DIST;
                shapeType = 0.;
                
                for(int i = 0; i < 6; i++) {
                    float fi = float(i);
                    float seed = fi * 12.34;
                    
                    float h1 = hash13(vec3(seed, 0., 0.));
                    float h2 = hash13(vec3(seed, 1., 0.));
                    float h3 = hash13(vec3(seed, 2., 0.));
                    float h4 = hash13(vec3(seed, 3., 0.));
                    
                    float speed = 1.5 + h1 * 2.0;
                    float height = h2 * 5.0 - 2.5;
                    float depth = h3 * 12.0 + 8.0;
                    float size = 0.3 + h4 * 0.4;
                    
                    float xOffset = sin(u_time * 0.4 + seed) * 2.0;
                    float yOffset = cos(u_time * 0.5 + seed) * 1.0;
                    
                    float xPos = u_time * speed + seed * 8.0;
                    xPos = mod(xPos, 30.0) - 15.0;
                    
                    vec3 pos = vec3(xPos + xOffset, height + yOffset, depth);
                    vec3 localP = p - pos;
                    
                    float rot = u_time * (0.5 + h4);
                    localP.xy *= rot2D(rot);
                    localP.xz *= rot2D(rot * 0.7);
                    
                    float shapeDist;
                    int currentType = i % 4;
                    
                    if (currentType == 0) {
                        shapeDist = sdSphere(localP, size);
                    } else if (currentType == 1) {
                        shapeDist = sdBox(localP, vec3(size * 0.85));
                    } else if (currentType == 2) {
                        shapeDist = sdPyramid(localP, size * 1.4);
                    } else {
                        shapeDist = sdX(localP, size * 0.4);
                    }
                    
                    if (shapeDist < d) {
                        d = shapeDist;
                        shapeType = float(currentType);
                    }
                }
                
                return d;
            }
            
            vec3 norm_shapes(vec3 p, out float shapeType) {
                const float eps = 0.003;
                vec2 e = vec2(eps, 0);
                float st;
                return normalize(vec3(
                    sdf_shapes(p + e.xyy, shapeType) - sdf_shapes(p - e.xyy, st),
                    sdf_shapes(p + e.yxy, shapeType) - sdf_shapes(p - e.yxy, st),
                    sdf_shapes(p + e.yyx, shapeType) - sdf_shapes(p - e.yyx, st)
                ));
            }
            
            vec3 raymarch_wave(vec3 o, vec3 d, float omega) {
                float t = 0., a = 0., g = MAX_DIST, dt = 0., sl = 0., emin = 0.03, ed = emin;
                int dr = 0;
                bool hit = false;
                
                for (int i = 0; i < 60; i++) {
                    vec3 p = o + d * t;
                    float ndt = sdf_wave(p);
                    
                    if (abs(dt) + abs(ndt) < sl) {
                        sl -= omega * sl;
                        omega = 1.;
                    } else {
                        sl = ndt * omega;
                    }
                    
                    dt = ndt;
                    t += sl;
                    g = (t > 10.) ? min(g, abs(dt)) : MAX_DIST;
                    
                    t += dt;
                    if (t >= MAX_DIST) break;
                    if (dt < MIN_DIST) {
                        if (dr > MAX_DRAWS) break;
                        dr++;
                        
                        float f = smoothstep(0.09, 0.11, (p.z * .9) / 100.);
                        if (!hit) {
                            a = .01;
                            hit = true;
                        }
                        ed = 2. * max(emin, abs(ndt));
                        a += .0135 * f;
                        t += ed;
                    }
                }
                
                g /= 3.;
                return vec3(a, max(1. - g, 0.), t);
            }
            
            vec4 raymarch_shapes(vec3 o, vec3 d, out float shapeType) {
                float t = 1.0;
                shapeType = 0.;
                
                for (int i = 0; i < 50; i++) {
                    vec3 p = o + d * t;
                    float dist = sdf_shapes(p, shapeType);
                    
                    if (dist < 0.01 && t > 1.0) {
                        float tempType;
                        vec3 n = norm_shapes(p, tempType);
                        
                        if (length(n) > 0.5 && length(n) < 1.5) {
                            float nDotD = dot(n, -d);
                            float fresnel = pow(1.0 - max(nDotD, 0.0), 2.5);
                            float rim = pow(1.0 - abs(nDotD), 3.0);
                            return vec4(1.0, fresnel, rim, t);
                        }
                    }
                    
                    if (t > MAX_DIST) break;
                    if (dist < 0.001) break;
                    t += max(dist * 0.9, 0.03);
                }
                
                return vec4(0.0);
            }
            
            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                vec3 o = vec3(0);
                vec3 d = normalize(vec3((gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y, 1));
                
                vec3 waveData = raymarch_wave(o, d, 1.2);
                float shapeType;
                vec4 shapeData = raymarch_shapes(o, d, shapeType);
                
                float waveAlpha = waveData.x;
                float waveGlow = waveData.y;
                
                float shapeHit = shapeData.x;
                float shapeFresnel = shapeData.y;
                float shapeRim = shapeData.z;
                
                vec2 gradDir = normalize(vec2(1.0, 1.0));
                float gradPos = dot(uv, gradDir);
                
                vec3 c;
                if (gradPos < 0.35) {
                    c = mix(u_color1, u_color2, gradPos / 0.35);
                } else if (gradPos < 0.70) {
                    c = mix(u_color2, u_color3, (gradPos - 0.35) / 0.35);
                } else {
                    c = mix(u_color3, u_color4, (gradPos - 0.70) / 0.30);
                }
                
                vec3 colorTint;
                if (shapeType < 0.5) {
                    colorTint = vec3(1.0, 0.92, 0.94);
                } else if (shapeType < 1.5) {
                    colorTint = vec3(0.96, 0.92, 1.0);
                } else if (shapeType < 2.5) {
                    colorTint = vec3(0.92, 1.0, 0.96);
                } else {
                    colorTint = vec3(0.92, 0.96, 1.0);
                }
                
                #ifdef SHAPES_IN_FRONT
                    c = mix(c, vec3(0.95, 1.0, 0.98), waveAlpha);
                    
                    if (shapeHit > 0.5) {
                        vec3 refractedBg = c * colorTint;
                        float transparency = mix(0.15, 0.85, pow(shapeFresnel, 1.8));
                        
                        float specular = pow(shapeFresnel, 3.0);
                        vec3 specularColor = vec3(0.98, 1.0, 0.99) * specular * 1.2;
                        
                        float edgeGlow = pow(shapeRim, 2.5);
                        vec3 iridescence = mix(vec3(1.0), colorTint, 0.3) * edgeGlow * 0.6;
                        
                        float innerRefract = pow(1.0 - shapeFresnel, 4.0);
                        vec3 innerColor = mix(vec3(1.0), colorTint, 0.15) * innerRefract * 0.3;
                        
                        vec3 glassColor = refractedBg + specularColor + iridescence + innerColor;
                        c = mix(c, glassColor, transparency);
                    }
                #else
                    if (shapeHit > 0.5) {
                        vec3 refractedBg = c * colorTint;
                        float transparency = mix(0.1, 0.7, pow(shapeFresnel, 2.0));
                        
                        float specular = pow(shapeFresnel, 3.5);
                        vec3 specularColor = vec3(0.95, 1.0, 0.96) * specular * 0.9;
                        
                        float edgeGlow = pow(shapeRim, 3.0);
                        vec3 iridescence = mix(vec3(0.93, 1.0, 0.95), colorTint, 0.25) * edgeGlow * 0.4;
                        
                        float innerRefract = pow(1.0 - shapeFresnel, 4.5);
                        vec3 innerColor = mix(vec3(0.95, 1.0, 0.96), colorTint, 0.1) * innerRefract * 0.2;
                        
                        vec3 glassColor = refractedBg + specularColor + iridescence + innerColor;
                        c = mix(c, glassColor, transparency);
                    }
                    
                    c = mix(c, vec3(0.95, 1.0, 0.98), waveAlpha);
                #endif
                
                #ifdef DUST
                    c += get_dust(uv, vec2(2000.), waveGlow) * vec3(0.8, 1.0, 0.85) * 0.35;
                #endif
                
                fragColor = vec4(c, 1.0);
            }
        `;

        function compileShader(gl: WebGL2RenderingContext, source: string, type: number) {
            const shader = gl.createShader(type);
            if (!shader) return null;

            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        }

        const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            return;
        }

        programRef.current = program;

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,
            1, -1,
            -1,  1,
            1,  1,
        ]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        gl.useProgram(program);

        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);

        const noiseImage = new Image();
        noiseImage.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, noiseImage);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        };
        noiseImage.src = '/textures/noise.png';

        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        startTimeRef.current = Date.now();

        const render = () => {
            if (!programRef.current || !glRef.current) return;

            const gl = glRef.current;
            const program = programRef.current;
            const currentTime = (Date.now() - startTimeRef.current) / 1000;

            const style = getComputedStyle(document.documentElement);
            const extractRGB = (gradientStr: string) => {
                const match = gradientStr.match(/#([0-9a-f]{6})/i);
                if (match) {
                    const hex = match[1];
                    return [
                        parseInt(hex.substr(0, 2), 16) / 255,
                        parseInt(hex.substr(2, 2), 16) / 255,
                        parseInt(hex.substr(4, 2), 16) / 255
                    ];
                }
                return [0, 0, 0];
            };

            const gradientStr = style.getPropertyValue('--screen-bg');

            let colors: number[][] = [];
            if (isDarkMode) {
                colors = [
                    [0.059, 0.090, 0.165],
                    [0.118, 0.227, 0.541],
                    [0.024, 0.714, 0.831],
                    [0.024, 0.714, 0.831]
                ];
            } else {
                colors = [
                    [0.176, 0.353, 0.102],
                    [0.290, 0.561, 0.149],
                    [0.427, 0.784, 0.224],
                    [0.659, 0.910, 0.416]
                ];
            }

            const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
            const timeLocation = gl.getUniformLocation(program, 'u_time');
            const color1Location = gl.getUniformLocation(program, 'u_color1');
            const color2Location = gl.getUniformLocation(program, 'u_color2');
            const color3Location = gl.getUniformLocation(program, 'u_color3');
            const color4Location = gl.getUniformLocation(program, 'u_color4');

            gl.uniform2f(resolutionLocation, canvas!.width, canvas!.height);
            gl.uniform1f(timeLocation, currentTime);
            gl.uniform3fv(color1Location, colors[0]);
            gl.uniform3fv(color2Location, colors[1]);
            gl.uniform3fv(color3Location, colors[2]);
            gl.uniform3fv(color4Location, colors[3]);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            animationRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isDarkMode]);

    return (
        <div className="device-screen">
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}
            />

            <Navbar />

            <div className="theme-toggle-container">
                {/*
                    <span className="theme-label bar-background">{isDarkMode ? 'DARK' : 'LIGHT'}</span>
                */}
                <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={() => setIsDarkMode(!isDarkMode)}
                    />
                    <span className="slider" />
                </label>
            </div>

            <main className="content-area">
                {children}
            </main>

            <div className="bottom-bar">
                <button className="start-button">
                    <div className="windows-logo">
                        <div className="win-sq win-red" />
                        <div className="win-sq win-green" />
                        <div className="win-sq win-blue" />
                        <div className="win-sq win-yellow" />
                    </div>
                    <span>Start</span>
                </button>
                <button className="taskbar-button">
                    Windows Media
                </button>
            </div>
        </div>
    );
};

export default Layout;