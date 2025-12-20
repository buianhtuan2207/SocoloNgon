import React from 'react';
import './style.scss';

// Import Component
import SidebarFilter from '../../components/SidebarFilter/SidebarFilter';
import SortBar from '../../components/SortBar/SortBar';
import Pagination from '../../components/Pagination/Pagination';
import CardProduct from '../../components/CardProduct/CardProduct'; // Tái sử dụng cái cũ của bạn

// Import Data
import { PRODUCTS } from '../../data/products';

export default function ProductsPage() {
    return (
        <div className="products-page">
            <div className="container">
                <div className="row">

                    {/* CỘT TRÁI (3/12) */}
                    <div className="col-lg-3 mb-4">
                        <SidebarFilter />
                    </div>

                    {/* CỘT PHẢI (9/12) */}
                    <div className="col-lg-9">

                        {/* 1. Tiêu đề & Sắp xếp */}
                        <SortBar title="Sản phẩm nổi bật" />

                        {/* 2. Lưới sản phẩm (CardProduct cũ đã làm) */}
                        <CardProduct data={PRODUCTS} />

                        {/* 3. Phân trang */}
                        <Pagination />

                    </div>
                </div>
            </div>
        </div>
    );
}