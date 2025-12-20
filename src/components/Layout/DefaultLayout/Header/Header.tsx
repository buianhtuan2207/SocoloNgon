import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import thư viện Router
import './style.scss';
import Icon from '../../../../components/Icons/Icon'; // Import Icon (đường dẫn tương đối từ cấu trúc thư mục của bạn)

export default function Header() {
    return (
        <header className="header shadow-sm">
            <div className="container d-flex justify-content-between align-items-center py-2">

                {/* Logo dùng Link để về trang chủ không bị load lại trang */}
                <Link to="/" className="logo text-decoration-none">
                    SocolaShop
                </Link>

                {/* Menu dùng NavLink để có trạng thái active */}
                <nav className="menu d-none d-md-flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "active" : ""}
                        end // Thêm end để chỉ active khi đúng chính xác là trang chủ
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/products"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Products
                    </NavLink>

                    <NavLink
                        to="/promotions"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Promotions
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Contact
                    </NavLink>
                </nav>

                <div className="search-box">
                    <input type="text" placeholder="Search product..." />
                    <Icon icon="search" className="icon-search" />
                </div>

                <div className="icon-box d-flex gap-3">
                    <div className="position-relative cursor-pointer">
                        <Icon icon="shopping-cart" className="icons" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6rem'}}>
                            2
                        </span>
                    </div>
                    <Icon icon="user" className="icons cursor-pointer" />
                </div>
            </div>
        </header>
    );
}