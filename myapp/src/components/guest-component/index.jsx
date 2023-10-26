import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { routerLinks } from "../../router";
import { Login } from "../../pages/login";

export const GuestComponent = () =>{
    return <div>
        <header></header>
        <NavLink to={routerLinks.LOGIN}>Login page</NavLink>
        <Routes>
            <Route path={routerLinks.LOGIN} element={<Login/>}></Route>
        </Routes>
        <footer></footer>
    </div>
}