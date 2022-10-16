import React from "react";
import "../../css/header.css";

function Header() {
    return (
        <header className="py-4 header  ">
            <div className="container text-center ">
                <a href="/">
                    <img alt="" width="40%" height="40%" src="/images/icnacc2.png" />
                </a>
            </div>
        </header>
    );
}

export default Header;
