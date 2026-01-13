import { useRouter } from '../router';

const Home = () => {
    const { navigate } = useRouter();

    const cards = [
        { path: '/about', title: 'About', description: 'Experience & skills', icon: 'about.png' },
        { path: '/projects', title: 'Projects', description: 'My private work', icon: 'projects.png' },
        { path: '/tools', title: 'Tools', description: 'Utilities & apps', icon: 'tools.png' },
        { path: '/contact', title: 'Contact', description: 'Get in touch', icon: 'contact.png' },
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

            <div className="cards">
                {cards.map(({ path, title, description, icon }) => (
                    <button
                        key={path}
                        className="glass-panel card card-hover card"
                        onClick={() => navigate(path)}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}icons/${icon}`}
                            alt={title}
                            className="card-icon icon-shadow"
                        />
                        <div className="card-content">
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