interface Project {
    id: string;
    title: string;
    description: string;
    details: string[];
    image: string;
}

const projects: Project[] = [
    {
        id: 'pokemon-vgc',
        title: 'Pokemon VGC',
        description: 'Applied ML for competitive team analysis and synthesis',
        details: [
            'Data mining for competitive team analysis',
            'Custom heuristics and model from scratch',
            'Historical data scraping and cleaning',
            'Team generation based on meta trends'
        ],
        image: 'projects/pokemon_vgc.png'
    },
    {
        id: 'tshader',
        title: 'TShader',
        description: 'Open-source Terraria rendering engine',
        details: [
            'Based on Lights and Shadows decompilation',
            'Multi-pass rendering (bloom, etc)',
            'Custom HLSL shader support'
        ],
        image: 'projects/terraria_shader.png'
    },
    {
        id: 'animal-adopt',
        title: 'Animal Adopt',
        description: 'Full-stack social platform for animal adoption',
        details: [
            'Led development for LA adoption platform',
            'Architected front-end and back-end',
            'Angular guidance and reusable components'
        ],
        image: 'projects/animal_adopt.png'
    },
    {
        id: 'love2d-engine',
        title: 'LOVE2D Engine',
        description: 'Comprehensive game engine systems in Lua',
        details: [
            'ECS, Physics, Lighting, AI, Particles',
            'Iterator library with chain fusion',
            'Optimized for LuaJIT (SoA, FFI)',
            'Matrix/Vector math libraries'
        ],
        image: 'projects/love2d_engine.png'
    },
    {
        id: 'lunet',
        title: 'Lunet',
        description: 'Custom networking protocol and GUI in pure Lua',
        details: [
            'Custom protocol alternative to HTTP',
            'lpack for efficient data transport',
            'Sandboxed client and server',
            'Immediate-mode GUI with LOVE2D'
        ],
        image: 'projects/lunet.png'
    },
    {
        id: 'mica',
        title: 'Mica',
        description: 'Embeddable interpreted programming language',
        details: [
            'Alternative to Lua with smaller VM',
            'Register-based virtual machine',
            'Closures and zero-cost abstractions',
            'Lazy iterators with monomorphization'
        ],
        image: 'projects/mica.png'
    }
];

const Projects = () => {
    return (
        <div className="page-container">
            <h1 className="page-title txt-primary text-shadow">Projects</h1>

            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="glass-panel card card-hover project-card">
                        <div className="project-image-wrapper">
                            <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="project-image" />
                            <div className="project-overlay txt-primary">
                                <ul>
                                    {project.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="project-divider" />
                        <div className="project-info">
                            <h3 className="txt-primary text-shadow">{project.title}</h3>
                            <p className="txt-secondary">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;