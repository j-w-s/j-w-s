const About = () => {
    const experience = [
        {
            title: 'Full-Stack Software Engineer',
            company: 'United Tile Company',
            location: 'Shreveport, LA',
            period: 'Jun 2025 – Nov 2025',
            highlights: [
                'Architected and led full-stack development of several core business platforms internal tools',
                'Reverse-engineered legacy DLLs to build custom CLI automation tools for MoraWare and Sage',
                'Architected secure payment gateway using NMI and CollectJs with custom multi-fund allocation logic',
                'Engineered end-to-end OpenAI agent pipeline for document classification and automated workflows',
                'Migrated legacy Flask analytics to high-performance FastAPI microservices'
            ]
        },
        {
            title: 'Software Engineer Intern',
            company: 'Louisiana Tech University',
            location: 'Ruston, LA',
            period: 'Mar 2024 – May 2024',
            highlights: [
                'Developed and optimized prompt engineering strategies for GPT-4 models in business applications',
                'Applied data mining techniques to scrape, clean, and prepare large-scale training datasets'
            ]
        },
        {
            title: 'Software Engineer Intern',
            company: 'Cyber Innovation Center',
            location: 'Bossier City, LA',
            period: 'Jun 2023 – Aug 2023',
            highlights: [
                'Led front-end and back-end development for Air Force Global Strike Command\'s workflow scheduler using Angular and C#',
                'Developed automated scripts for synthetic data generation to accelerate database stress testing'
            ]
        }
    ];

    const skills = {
        languages: ['C', 'C#', 'Python', 'TypeScript', 'HTML', 'CSS', 'Lua', 'Rust', 'SQL'],
        frameworks: ['.NET 9', 'React', 'Next.js', 'FastAPI', 'Flask', 'Angular', 'Node.js', 'Entity Framework Core'],
        tools: ['Docker', 'Azure', 'Git', 'PostgreSQL', 'MySQL', 'SQL Server'],
        concepts: ['Reverse Engineering', 'Microservices', 'Distributed Systems', 'Full-Stack Architecture', 'Networking', 'Data Mining']
    };

    return (
        <div className="page-container">
            <h1 className="page-title txt-primary text-shadow">About Me</h1>

            <div className="glass-panel card2 card-hover section-card">
                <h2 className="section-title txt-primary text-shadow">Experience</h2>
                {experience.map((exp, i) => (
                    <div key={i} className="experience-item">
                        <h3 className="txt-primary">{exp.title}</h3>
                        <p className="txt-secondary"><strong>{exp.company}</strong> | {exp.location}</p>
                        <p className="txt-secondary experience-period">{exp.period}</p>
                        <ul className="experience-highlights">
                            {exp.highlights.map((highlight, j) => (
                                <li key={j} className="txt-secondary">{highlight}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="glass-panel card2 card-hover section-card">
                <h2 className="section-title txt-primary text-shadow">Education</h2>
                <div className="education-item">
                    <h3 className="txt-primary">Louisiana Tech University</h3>
                    <p className="txt-secondary">Bachelor of Science with Honors</p>
                    <p className="txt-secondary">Computer Science, Concentration in Cybersecurity</p>
                    <p className="txt-secondary education-details">GPA: 3.9/4.0 | Presidential Scholarship Recipient</p>
                    <p className="txt-secondary education-date">September 2020 - May 2024</p>
                </div>
            </div>

            <div className="glass-panel card2 card-hover section-card">
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