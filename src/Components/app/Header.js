import React from "react";
import "../../css/header.css";

function Header() {
    return (
        <header className="py-4 header  ">
            <div className="container text-center ">
                <a href="/">
                    <img alt="" src="/images/airportlogo.png" />
                </a>
            </div>
        </header>
    );
}

export default Header;
