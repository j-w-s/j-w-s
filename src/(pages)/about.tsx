const About = () => {
    const experience = [
        {
            title: 'Software Engineer',
            description: 'Full-stack development, systems programming, and a whole lot more! :)'
        }
    ];

    const skills = {
        languages: ['TypeScript', 'JavaScript', 'Python', 'Lua', 'Rust', 'C#', 'HLSL'],
        frameworks: ['React', 'Angular', 'LOVE2D', 'tModLoader', 'Vite'],
        tools: ['Git', 'Node.js', 'FFI', 'LuaJIT'],
        concepts: ['ECS', 'Compiler Design', 'Shader Programming', 'Networking', 'Data Mining']
    };

    return (
        <div className="page-container">
            <h1 className="page-title txt-primary text-shadow">About Me</h1>

            <div className="glass-panel card card-hover section-card">
                <h2 className="section-title txt-primary text-shadow">Experience</h2>
                {experience.map((exp, i) => (
                    <div key={i} className="experience-item">
                        <h3 className="txt-primary">{exp.title}</h3>
                        <p className="txt-secondary">{exp.description}</p>
                    </div>
                ))}
            </div>

            <div className="glass-panel card card-hover section-card">
                <h2 className="section-title txt-primary text-shadow">Education</h2>
                <div className="education-item">
                    <h3 className="txt-primary">Louisiana Tech University</h3>
                    <p className="txt-secondary">Bachelor of Science with Honors</p>
                    <p className="txt-secondary">Computer Science, Concentration in Cybersecurity</p>
                    <p className="txt-secondary education-details">GPA: 3.9/4.0 | Presidential Scholarship Recipient</p>
                    <p className="txt-secondary education-date">September 2020 - May 2024</p>
                </div>
            </div>

            <div className="glass-panel card card-hover section-card">
                <h2 className="section-title txt-primary text-shadow">Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h4 className="txt-primary">Languages</h4>
                        <div className="skill-tags">
                            {skills.languages.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4 className="txt-primary">Frameworks</h4>
                        <div className="skill-tags">
                            {skills.frameworks.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4 className="txt-primary">Tools</h4>
                        <div className="skill-tags">
                            {skills.tools.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4 className="txt-primary">Concepts</h4>
                        <div className="skill-tags">
                            {skills.concepts.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;