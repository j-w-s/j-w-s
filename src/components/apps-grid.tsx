import { type ReactNode } from 'react';

interface AppGridProps {
    children: ReactNode;
    className?: string;
}

const AppGrid = ({ children, className = '' }: AppGridProps) => {
    return (
        <div className={`app-grid ${className}`}>
            {children}
        </div>
    );
};

export default AppGrid;