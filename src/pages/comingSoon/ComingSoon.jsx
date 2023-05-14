import React from "react";
import logo from '../../assets/logo.png';
import NavBar from '../../components/NavBar';

function ComingSoon() {
    return (
        <div className="centered">
            <div className="background"/>
            <a href="/"><img src={logo} alt="Cityloop Logo" className="logo-title"/></a>
            <NavBar/>

            <div className="home-container">
                <h1 className="shadow">Coming Soon...</h1>
            </div>
        </div>
    )
}

export default ComingSoon