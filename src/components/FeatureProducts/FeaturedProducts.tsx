import React from "react";
import CardProduct from "../CardProduct/CardProduct"; // Nhớ sửa đường dẫn import
import { PRODUCTS } from "../../data/products";
import "./style.scss"

const FeaturedProducts = () => {
    // Thay vì filter isHot, ta dùng slice để lấy 8 sản phẩm đầu tiên
    const featuredList = PRODUCTS.slice(0, 8);

    return (
        <section className="py-5">
            <h2 className="text-center mb-4 fw-bold">Sản phẩm nổi bật</h2>
            <CardProduct data={featuredList} />
        </section>
    );
};

export default FeaturedProducts;