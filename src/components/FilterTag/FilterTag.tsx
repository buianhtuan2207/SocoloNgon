import React from 'react';
import './style.scss';

interface TagItem {
    label: string;
    isActive?: boolean;
}

interface FilterTagProps {
    items: TagItem[];
}

export default function FilterTag({ items }: FilterTagProps) {
    return (
        <div className="filter-tag d-flex gap-2 flex-wrap">
            {items.map((item, index) => (
                <button
                    key={index}
                    className={`btn-tag ${item.isActive ? 'active' : ''}`}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}