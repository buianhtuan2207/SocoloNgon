import React from 'react';
import './style.scss';

interface RadioItem {
    id: string;
    label: string;
    isChecked?: boolean;
    isHighlight?: boolean;
}

interface FilterRadioProps {
    name: string;
    items: RadioItem[];
}

export default function FilterRadio({ name, items }: FilterRadioProps) {
    return (
        <div className="filter-radio d-flex flex-column gap-2">
            {items.map((item) => (
                <div key={item.id} className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={item.id}
                        defaultChecked={item.isChecked}
                    />
                    <label
                        className={`form-check-label ${item.isHighlight ? 'highlight' : ''}`}
                        htmlFor={item.id}
                    >
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    );
}