import "./navbar.css"
import logo from "./../../assets/img/logo.svg"

const Navbar = () => {
    return ( 
        <div className="container navbar">
            <div className="buttons">
                <div className="register">
                    <a href="#!">
                        <button className="btn rounded-pill">הרשמה</button>
                    </a>
                </div>
                <div className="login">
                    <a href="#!">
                        <button className="btn rounded-pill">כניסה</button>
                    </a>
                </div>
            </div>
            <div className="logo_navbar">
                <img src={logo} alt="Logo" />
            </div>
        </div>
     );
}
 
export default Navbar;