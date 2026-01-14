const About = () => {
    const experience = [
        {
            title: 'Full-Stack Software Engineer',
            company: 'United Tile Company',
            location: 'Shreveport, LA',
            period: 'Jun 2025 – Oct 2025',
            highlights: [
                'Architected and led full-stack development of 5 core business platforms and 3 internal tool suites, enabling field workers to access real-time data and streamlining operational workflows',
                'Consolidated dependencies and refactored a fragmented codebase into a unified monorepo with automated theming and shared libraries, supporting multiple frameworks (Next.js, Vite) while eliminating deployment issues',
                'Reverse-engineered legacy DLLs to build custom CLI/Web automation tools for MoraWare and Sage, unlocking previously inaccessible API capabilities for automated business workflows',
                'Built a secure payment gateway using NMI and CollectJs with multi-fund allocation logic, automating payment splits across cost centers',
                'Engineered an end-to-end OpenAI agent pipeline that ingests documents, performs classification, and triggers downstream MoraWare workflows, significantly reducing manual data entry',
                'Migrated legacy Flask analytics to high-performance FastAPI microservices for real-time data dashboards',
                'Contributed to documentation and DevOps infrastructure while providing technical support to 20+ end-users across multiple departments and apps, using feedback to prioritize bug fixes and feature development',
                'Drove detailed UI/UX prototyping and architectural planning via Figma'
            ]
        },
        {
            title: 'Software Engineer Intern',
            company: 'Louisiana Tech University',
            location: 'Ruston, LA',
            period: 'Mar 2024 – May 2024',
            highlights: [
                'Developed and optimized prompt engineering strategies to guide GPT-4 models for contextually accurate responses in academic applications',
                'Applied data mining techniques to scrape, clean, and prepare large-scale training datasets from diverse business web sources'
            ]
        },
        {
            title: 'Software Engineer Intern',
            company: 'Cyber Innovation Center',
            location: 'Bossier City, LA',
            period: 'Jun 2023 – Aug 2023',
            highlights: [
                'Led front-end and back-end development for the Air Force Global Strike Command\'s (AFGSC) workflow scheduler using Angular and C#',
                'Developed automated scripts for synthetic data generation to accelerate database stress testing and team development velocity'
            ]
        }
    ];

    const skills = {
        languages: ['C', 'C#', 'Python', 'TypeScript', 'Javascript', 'HTML', 'CSS', 'SQL'],
        frameworks: ['.NET 8/9', 'React', 'Next.js', 'FastAPI', 'Flask', 'Angular', 'Node.js', 'Entity Framework Core'],
        tools: ['Docker', 'Azure', 'Git', 'PostgreSQL', 'MySQL', 'SQL Server', 'Figma'],
        concepts: ['Reverse Engineering', 'Microservices', 'Distributed Systems', 'Full-Stack Development', 'System Architecture', 'Networking', 'Data Mining', 'Machine Learning', 'Artificial Intelligence']
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
                    <p className="txt-secondary">Bachelor of Science with Honors in Computer Science</p>
                    <p className="txt-secondary">Concentration in Cybersecurity</p>
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