import { Dashboard } from "../pages/admin/pages/dashboard";
import { Users } from "../pages/admin/pages/users";
import { Products } from "../pages/admin/pages/products";
import { Categories } from "../pages/admin/pages/categories";
import { Settings } from "../pages/admin/pages/settings";

export const routerLinks = {
    LOGIN:'/',
    ADMIN:'/admin',
    CATEGORIES:'/admin/categories',
    DASHBOARD:'/admin/dashboard',
    PRODUCTS:'/admin/products',
    SETTINGS:'/admin/settings',
    USERS:'/admin/users',
}

export const authList = [
    {
        path: routerLinks.DASHBOARD,
        component: <Dashboard/>,
        title: 'Dashboard'
    },
    {
        path: routerLinks.USERS,
        component: <Users/>,
        title: 'Users'
    },
    {
        path: routerLinks.PRODUCTS,
        component: <Products/>,
        title: 'Products'
    },
    {
        path: routerLinks.CATEGORIES,
        component: <Categories/>,
        title: 'Categories'
    },
    {
        path: routerLinks.SETTINGS,
        component: <Settings/>,
        title: 'Settings'
    }
]