import React from "react";
import "../../css/footer.css";

function Footer() {
    return (
        <footer className="py-3 bg-dark text-light footer">
            <div className="container text-center">
                <ul className="nav justify-content-center mb-1">
                    <li className="nav-item">
                        <img alt="" src="/images/airportlogo.png" />
                    </li>
                </ul>

                <p>
                    <small>Copyright &copy;Seong Bo Jung & Jung Uk Park </small>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
