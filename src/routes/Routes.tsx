import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Wishlist from "../pages/Wishlist/Wishlist";

/* Định nghĩa type cho route */
export type AppRoute = {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType | null;
};

/* Gán type cho routes */
const publicRoutes: AppRoute[] = [
    {path: "/", component: Home},
    {path: "/login", component: Login, layout: null},
    {path: "/wishlist", component: Wishlist},
];

const privateRoutes: AppRoute[] = [];

export { publicRoutes, privateRoutes };
