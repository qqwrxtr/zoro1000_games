import "./navbar.css"
import React, { useState } from 'react';
import ZoroForm from "./../ZoroForm/ZoroForm.jsx";
import logo from "./../../assets/img/logo.svg"

const Navbar = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleFormOpen = () => {
        setIsFormVisible(true);
    };

    const handleFormClose = () => {
        setIsFormVisible(false);
    };

    return ( 
        <div className="container navbar">
            <div className="buttons">
                <div className="register">
                    <a href="#!" onClick={handleFormOpen}>
                        <button className="btn rounded-pill">הרשמה</button>
                    </a>
                </div>
                <div className="login">
                    <a href="#!" onClick={handleFormOpen}>
                        <button className="btn rounded-pill">כניסה</button>
                    </a>
                </div>
            </div>
            <div className="logo_navbar">
                <img src={logo} alt="Logo" />
            </div>
            {isFormVisible && <ZoroForm onClose={handleFormClose}/>}
        </div> 
     );
}
 
export default Navbar;