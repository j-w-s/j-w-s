import { type ReactNode } from 'react';

interface WidgetsGridProps {
    children: ReactNode;
    className?: string;
}

const WidgetsGrid = ({ children, className = '' }: WidgetsGridProps) => {
    return (
        <div className={`widgets ${className}`}>
            {children}
        </div>
    );
};

export default WidgetsGrid;