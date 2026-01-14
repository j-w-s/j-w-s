import { type ReactNode } from 'react';

interface WidgetBoxProps {
    children: ReactNode;
    className?: string;
    variant?: 'main' | 'weather' | 'default';
}

const WidgetBox = ({ children, className = '', variant = 'default' }: WidgetBoxProps) => {
    const variantClass = variant === 'main' ? 'widget-main' : variant === 'weather' ? 'widget-weather' : '';

    return (
        <div className={`widget-box ${variantClass} ${className}`}>
            {children}
        </div>
    );
};

export default WidgetBox;