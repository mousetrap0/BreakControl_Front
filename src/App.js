import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/app/Header";
import Nav from "./Components/app/Nav";
import Main from "./Components/app/Main";
import Footer from "./Components/app/Footer";
import AuthProvider from "./Components/context/AuthProvider";
import HttpHeadersProvider from "./Components/context/HttpHeadersProvider";
import "./css/style.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <AuthProvider>
                    <HttpHeadersProvider>
                        <Nav />
                        <Main />
                    </HttpHeadersProvider>
                </AuthProvider>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
