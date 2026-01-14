import { type ReactNode } from 'react';

interface AppIconProps {
    icon: string | ReactNode;
    label: string;
    onClick?: () => void;
    className?: string;
}

const AppIcon = ({ icon, label, onClick, className = '' }: AppIconProps) => {
    return (
        <div className={`app-item ${className}`} onClick={onClick}>
            <div className="icon-shape">
                {typeof icon === 'string' ? (
                    <img
                        src={icon}
                        alt={label}
                        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                    />
                ) : (
                    <div style={{ fontSize: '28px' }}>{icon}</div>
                )}
            </div>
            <span className="app-label">{label}</span>
        </div>
    );
};

export default AppIcon;