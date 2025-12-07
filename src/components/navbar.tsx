import { useRouter } from '../router';

const Navbar = () => {
    const { pathname, navigate } = useRouter();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/tools', label: 'Tools' },
        { path: '/contact', label: 'Contact' },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <nav className="top-bar">
            <div className="top-bar-icons">
                {navLinks.map(({ path, label }) => (
                    <a
                        key={path}
                        href={path}
                        onClick={(e) => handleClick(e, path)}
                        className={`nav-link ${pathname === path ? 'nav-link-active' : ''}`}
                    >
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;