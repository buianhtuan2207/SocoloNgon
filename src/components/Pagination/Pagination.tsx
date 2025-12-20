import React from 'react';
import './style.scss';
import Icon from '../Icons/Icon'; // Giả sử bạn đã có component Icon

export default function Pagination() {
    return (
        <div className="pagination-wrapper mt-5 d-flex justify-content-center gap-2">
            <button className="btn-page"><Icon icon="chevron-left" /></button>
            <button className="btn-page active">1</button>
            <button className="btn-page">2</button>
            <button className="btn-page">3</button>
            <button className="btn-page"><Icon icon="chevron-right" /></button>
        </div>
    );
}