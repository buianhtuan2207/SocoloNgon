import React from 'react';
import './style.scss';

interface MenuItem {
    label: string;
    count?: number;
    isActive?: boolean;
}

interface FilterMenuProps {
    items: MenuItem[];
}

export default function FilterMenu({ items }: FilterMenuProps) {
    return (
        <ul className="filter-menu list-unstyled mb-0">
            {items.map((item, index) => (
                <li key={index} className={`menu-item ${item.isActive ? 'active' : ''}`}>
                    <span className="label">{item.label}</span>
                    {item.count !== undefined && (
                        <span className="count">{item.count}</span>
                    )}
                </li>
            ))}
        </ul>
    );
}