import React from "react";
import Router from "../router/Router";
import "../../css/main.css";

function Main() {
    return (
        <main>
            <div className="py-2">
                <div className="container">
                    <Router></Router>
                </div>
            </div>
        </main>
    );
}

export default Main;
