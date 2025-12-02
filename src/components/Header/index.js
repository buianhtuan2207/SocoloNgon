import React from 'react';
import './style.scss';
import Icon from '../../components/Icons';

export default function Header() {
    return (
        <header className="header">
            <h2 className="logo">SocolaShop</h2>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Promotions</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <div className="search-box">
                <input type="input" placeholder="Search" />
                <a href=""><Icon icon="search" className="icons"></Icon></a>
            </div>
            <div className="icon-box">
                <a href=""><Icon icon="shopping-cart" className="icons"></Icon></a>
                <a href=""><Icon icon="user" className="icons"></Icon></a>
            </div>
        </header>
    );
}