import "./footer.css"
import logo from "./../../assets/img/logo.svg"

const Footer = () => {
    return ( 
        <div className="container footer-container w-100 d-flex justify-content-center">
            <div className="row d-flex justify-content-between align-items-center w-100">
                <div className="col-3">
                <div className="text_footer d-flex flex-column text-end">
                    <div className="titlee fw-bold ">
                        <p>הימורים באחריות</p>
                    </div>
                    <div className="subtitle">
                        <p>Please play in a responsible way. Zoro1000 users must be 18 or over</p>
                    </div>
                </div>
                </div>
                <div className="col-9 d-flex justify-content-end">
                <div className="logo">
                    <img src={logo} alt="logo" className="img-fluid"/>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;