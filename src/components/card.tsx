import { type ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    hover?: boolean;
}

const Card = ({ children, className = '', onClick, hover = true }: CardProps) => {
    return (
        <div
            className={`glass-panel card ${hover ? 'card-hover' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;
