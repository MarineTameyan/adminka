import './App.css';
import React, {useEffect, useState} from "react";
import {AuthComponent} from "./components/auth-component";
import {GuestComponent} from "./components/guest-component";

function App() {
  
    const [token, setToken] = useState('')

    useEffect(() => {
        let tokenData = localStorage.getItem('token')
        setToken(tokenData)
    }, []);

    return token ? <AuthComponent/> : <GuestComponent/>
}

export default App