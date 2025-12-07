import { useState, useEffect, type ReactNode } from 'react';
import Navbar from './navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className="device-screen">
            <div className="background-ripples">
                <div className="ripple-line" style={{ width: 300, height: 300 }} />
                <div className="ripple-line" style={{ width: 400, height: 400, bottom: -100, right: -100 }} />
                <div className="ripple-line" style={{ width: 500, height: 500, bottom: -150, right: -150 }} />
                <div className="ripple-line" style={{ width: 600, height: 600, bottom: -200, right: -200 }} />
                <div className="ripple-line" style={{ width: 700, height: 700, bottom: -250, right: -250 }} />
            </div>

            <Navbar />

            <div className="theme-toggle-container">
                <span className="theme-label">{isDarkMode ? 'DARK' : 'LIGHT'}</span>
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