import React from "react";
import "./planos.css";
import PlanCard from "./PlanosCards.jsx";

export default function Planos (){

    const planInfos =[
        {
            title: "Diário",
            price: "R$ 30,00",
            benefits: [
                "Uma coversa por dia", "Relatório de resumo diário",
                "Uma análise do seu dia", "Conselhos personalizados",
                "Um relatório semanal caso tenha feito 5 consultas"
            ]
        },
        {
            title: "Semanal",
            price: "R$ 120,00",
            benefits: [
                "Benefícios do plano diário", "Consultas diárias de domingo à sábado",
                "Resumo, análise e conselhos semanais", "Um feedback de progresso durante a semana",
            ]
        },
        {
            title: "Anual",
            price: "R$ 200,00",
            benefits: [
                "Todos os demais benefícios", "Progresso mensal",
                "Análise de todos os seus dias do mês e alinhamento com seus objetivos",
                "Análise de progresso das suas maiores dificuldades",
            ]
        },
    ]

    return(
        <section className="planos">
            <h2 className="planos__title">Planos</h2>
            <ul className="planos__grid">
                {planInfos.map((plan, index)=>(
                    <PlanCard data={plan} key={index} />
                ))}
            </ul>
        </section>
    );
}