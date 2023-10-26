import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authList,} from "../../router";
import { Route, Routes } from "react-router-dom";
import "./style.css"

export const Admin =() =>{
    const navigate = useNavigate('')

    const handleLogOut = () =>{
        localStorage.clear('loginToken')
        window.location.reload()
        navigate('/')
    }

    return <div className="admin-page">
        <div className="button">
            <button onClick={handleLogOut}>Log Out</button>
        </div>
        <div className="links">
          <ul>
            {authList.length ? authList.map((item, index) => (
            <li><NavLink key={index} to={item.path}>{item.title}</NavLink></li>
            )) : null}
          </ul>
          <Routes>
                {authList.length ? authList.map((item, index) => {
                    <Route key={index} path={item.path} element={item.component}/>
                }) : null}
          </Routes>
        </div>
    </div>
    
}