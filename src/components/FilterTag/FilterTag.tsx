import React from 'react';
import './filterTag.scss';

interface TagItem {
    label: string;
    value: string;
    count?: number;
}

interface FilterTagProps {
    items: TagItem[];
    activeValue?: string;
    onSelect: (value: string) => void;
}

export default function FilterTag({ items, activeValue, onSelect }: FilterTagProps) {
    return (
        <div className="filter-tag d-flex gap-2 flex-wrap">
            {items.map((item, index) => (
                <button
                    key={index}
                    className={`btn-tag ${activeValue === item.value ? 'active' : ''}`}
                    onClick={() => onSelect(item.value)}
                >
                    {item.label}
                    {/* Hiển thị số lượng nhỏ bên cạnh */}
                    <span className="ms-1 opacity-75 small">({item.count || 0})</span>
                </button>
            ))}
        </div>
    );
}