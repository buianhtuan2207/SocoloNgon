import React from 'react';
import './sidebarFilter.scss';
import FilterWidget from '../FilterWidget/FilterWidget';
import FilterMenu from '../FilterMenu/FilterMenu';
import FilterRadio from '../FilterRadio/FilterRadio';
import FilterTag from '../FilterTag/FilterTag';

// Interface nhận dữ liệu full từ cha
interface SidebarProps {
    categories: any[];
    flavors: any[];
    shapes: any[];
    filterState: {
        category: string;
        flavor: string;
        shape: string;
    };
    onFilterChange: (type: 'category' | 'flavor' | 'shape', value: string) => void;
}

export default function SidebarFilter({
                                          categories, flavors, shapes, // Nhận data từ props
                                          filterState, onFilterChange
                                      }: SidebarProps) {
    return (
        <aside className="sidebar-container">
            <FilterWidget title="Danh mục">
                <FilterMenu
                    items={categories}
                    activeValue={filterState.category}
                    onSelect={(val) => onFilterChange('category', val)}
                />
            </FilterWidget>

            <FilterWidget title="Hương vị">
                <FilterRadio
                    name="flavor"
                    items={flavors}
                    selectedId={filterState.flavor}
                    onChange={(val) => onFilterChange('flavor', val)}
                />
            </FilterWidget>

            <FilterWidget title="Hình thức">
                <FilterTag
                    items={shapes}
                    activeValue={filterState.shape}
                    onSelect={(val) => onFilterChange('shape', val)}
                />
            </FilterWidget>
        </aside>
    );
}