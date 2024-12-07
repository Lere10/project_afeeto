import React from "react";
import "./header.css";
import headerImg from "../../../images/header__img.png";
import headerLogo from "../../../images/header__logo.png";

export default function Header(){
    return(
        <header className="header">
            <section className="header__header">
                <img className="header__logo" src={headerLogo} alt="Logo Afeeto" />
                <div className="header__buttons">
                    <a className="header__already">
                        Já tenho conta
                    </a>
                    <button className="header__test">Teste grátis</button>
                </div>
            </section>
            <section className="header__content">
                <p className="header__pretitle">
                    Que bom ter você aqui
                </p>
                <h1 className="header__title">
                    Transforme seu bem-estar
                    com Afeeto.
                </h1>
                <p className="header__subtitle">
                    Descubra uma nova forma de cuidar da sua saúde mental com nosso diário emocional.
                    Converse com IAs psicólogas a qualquer momento que precisar.
                </p>
                <button className="header__mainButton">
                    Comece agora
                </button>
                <img src={headerImg} className="header__img" />
            </section>
        </header>
    )
}