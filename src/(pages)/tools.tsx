const Tools = () => {
    const tools = [
        { name: 'Coming Soon', description: 'Interactive tools and utilities will be added here', icon: '🔧' }
    ];

    return (
        <div className="page-container">
            <h1 className="page-title txt-primary text-shadow">Tools</h1>

            <div className="tools-grid">
                {tools.map((tool, i) => (
                    <div key={i} className="glass-panel card card-hover tool-card">
                        <span className="tool-icon">{tool.icon}</span>
                        <div className="tool-info">
                            <h3 className="txt-primary text-shadow">{tool.name}</h3>
                            <p className="txt-secondary">{tool.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Tools;