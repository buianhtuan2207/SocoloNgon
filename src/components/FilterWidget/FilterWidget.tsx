import React from 'react';
import './style.scss';

interface FilterWidgetProps {
    title: string;
    children: React.ReactNode;
}

export default function FilterWidget({ title, children }: FilterWidgetProps) {
    return (
        <div className="filter-widget">
            <h5 className="widget-title">{title}</h5>
            <div className="widget-content">
                {children}
            </div>
        </div>
    );
}