import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { routerLinks } from "../../router";
import { Admin } from "../../pages/admin";

export function AuthComponent() {
    
    return <div>
        <ul>
            <li>
                <NavLink to={routerLinks.ADMIN}>Admin Page</NavLink>
            </li>
        </ul>
    
    <div>
        <Routes>
            <Route path={routerLinks.ADMIN} element={<Admin/>}></Route>
        </Routes>
    </div>
</div>
}