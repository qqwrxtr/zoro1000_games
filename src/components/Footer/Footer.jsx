import "./footer.css"
import logo from "./../../assets/img/logo.svg"

const Footer = () => {
    return ( 
        <div className="container footer-container w-100 d-flex justify-content-center">
            <div className="row d-flex justify-content-between align-items-center w-100 joric flex-row-reverse">
                <div className="col-5">
                <div className="text_footer d-flex flex-column text-end">
                    <div className="titlee fw-bold ">
                        <p>הימורים באחריות</p>
                    </div>
                    <div className="subtitle">
                        <p>אנא לשחק בצורה אחראית. משתמשי זורו 1000 חייבים להיות בני 18 ומעלה</p>
                    </div>
                </div>
                </div>
                <div className="col-7 d-flex justify-content-start">
                <div className="logo">
                    <img src={logo} alt="logo" className="img-fluid"/>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;