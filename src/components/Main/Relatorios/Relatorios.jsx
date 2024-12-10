import React from "react";
import headLineImg from "../../../../images/relat__lineHead.png";
import footerLineImg from "../../../../images/relat__linefooter.png";
import "./relat.css";
import RelatCard from "./RelatCards.jsx";

export default function Relatorios (){

const relatInfos = [
    {
        title: "Diários",
        text: "Resumos, análises e conselhos personalizados após cada conversa",
    },
    {
        title: "Semanais",
        text: "Visão geral dos seus dias da semana todo domingo.",
    },
    {
        title: "Mensais",
        text: "Acompanhamento dos objetivos definidos no perfil.",
    },
    {
        title: "Anuais",
        text: "Progresso anual com um resumo de todos os meses.",
    },
]


    return(
        <section className="relat">
            <div className="relat__header">
                <h2 className="relat__header-title">
                    Relatórios
                </h2>
                <img src={headLineImg} className="relat__header-line"/>
            </div>
            <p className="relat__subtitle">
                Todas as sessões geram análises que ficam salvas para você conferir seu progresso a qualquer momento.
            </p>
            <ul className="relat__grid">
                {relatInfos.map((relat, index)=>(
                    <RelatCard props={relat} key={index}/>
                ))}
            </ul>
            <img className="relat__footer-line" src={footerLineImg}/>
        </section>
    );
}

