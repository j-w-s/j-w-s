const Tools = () => {
    const tools = [
        { name: 'Coming Soon', description: 'Interactive tools and utilities will be added here', icon: 'tools2.png' }
    ];

    return (
        <div className="page-container">
            <h1 className="page-title txt-primary text-shadow">Tools</h1>

            <div className="cards">
                {tools.map((tool, i) => (
                    <button
                        key={i}
                        className="glass-panel card card-hover card"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}icons/${tool.icon}`}
                            alt={tool.name}
                            className="card-icon icon-shadow"
                        />
                        <div className="card-content">
                            <h3 className="txt-primary text-shadow">{tool.name}</h3>
                            <p className="txt-secondary">{tool.description}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};
export default Tools;