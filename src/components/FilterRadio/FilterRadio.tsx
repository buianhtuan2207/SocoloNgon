import React from 'react';
import './filterRadio.scss';

interface RadioItem {
    id: string;
    label: string;
    count?: number;
    isHighlight?: boolean;
}

interface FilterRadioProps {
    name: string;
    items: RadioItem[];
    selectedId?: string;
    onChange: (id: string) => void;
}

export default function FilterRadio({name, items, selectedId, onChange}: FilterRadioProps) {
    return (
        <div className="filter-radio d-flex flex-column gap-2">
            {items.map((item) => (
                <div key={item.id} className="form-check d-flex justify-content-between align-items-center pe-2">
                    {/* Bọc input và label vào 1 div để căn trái */}
                    <div>
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={item.id}
                            checked={selectedId === item.id}
                            onChange={() => onChange(item.id)}
                        />
                        <label
                            className={`form-check-label ${item.isHighlight ? 'highlight' : ''}`}
                            htmlFor={item.id}
                        >
                            {item.label}
                        </label>
                    </div>
                    {/* Hiển thị số lượng bên phải */}
                    <span className="text-muted small">({item.count || 0})</span>
                </div>
            ))}
        </div>
    );
}