import React from "react";
import "./main.css";
import Apoio from "./Apoio/Apoio.jsx";
import Planos from "./Planos/Planos.jsx";
import Relatorios from "./Relatorios/Relatorios.jsx";

export default function Main(){
    return (
        <main className="main">
            <Apoio/>
            <Planos/>
            <Relatorios/>
        </main>
        
    )
}