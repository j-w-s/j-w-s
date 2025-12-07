import { useRouter } from '../router';

const Home = () => {
    const { navigate } = useRouter();

    const cards = [
        { path: '/about', title: 'About', description: 'Experience & skills', icon: '👤' },
        { path: '/projects', title: 'Projects', description: 'My work', icon: '🚀' },
        { path: '/tools', title: 'Tools', description: 'Utilities & apps', icon: '🛠️' },
        { path: '/contact', title: 'Contact', description: 'Get in touch', icon: '✉️' },
    ];

    return (
        <div className="home-container">
            <div className="home-profile">
                <img src={`${import.meta.env.BASE_URL}me.png`} alt="Will Shepherd" className="profile-image" />
                <div className="profile-info">
                    <h1 className="txt-primary text-shadow">Will Shepherd</h1>
                    <p className="txt-secondary text-shadow">Software Engineer</p>
                </div>
            </div>

            <div className="home-cards">
                {cards.map(({ path, title, description, icon }) => (
                    <button
                        key={path}
                        className="glass-panel card card-hover home-card"
                        onClick={() => navigate(path)}
                    >
                        <span className="home-card-icon">{icon}</span>
                        <div className="home-card-content">
                            <h3 className="txt-primary text-shadow">{title}</h3>
                            <p className="txt-secondary">{description}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Home;