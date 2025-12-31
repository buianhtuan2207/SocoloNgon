import React from 'react';
import './sortbar.scss';

interface SortBarProps {
    title: string;
    sortValue: string;
    onSortChange: (value: string) => void;
}

export default function SortBar({ title, sortValue, onSortChange }: SortBarProps) {
    return (
        <div className="sort-bar d-flex justify-content-between align-items-center mb-4">
            <h3 className="section-title">{title}</h3>

            <div className="sort-actions d-flex align-items-center gap-2">
                <span className="label text-muted small">Sắp xếp:</span>
                <select
                    className="form-select form-select-sm shadow-sm"
                    value={sortValue}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="default">Mới nhất</option>
                    <option value="price-asc">Giá thấp - cao</option>
                    <option value="price-desc">Giá cao - thấp</option>
                </select>
            </div>
        </div>
    );
}