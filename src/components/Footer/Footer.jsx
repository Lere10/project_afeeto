import React from "react";
import logo from "../../../images/footer__logo.png";
import "./footer.css";

export default function Footer(){
    return(
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="Afeeto logo" />
            <p className="footer__text">
                Contato: suporteafeeto@gmail.com
            </p>
        </footer>
    )
}