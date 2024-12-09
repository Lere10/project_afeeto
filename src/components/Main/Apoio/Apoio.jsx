import React from "react";
import "./apoio.css";
import mockupImg from "../../../../images/enc__img.png";

export default function Apoio(){
    return(
        <section className="apoio">
            <div className="apoio__content">
                <img className="apoio__img" alt="mockup notebook" src={mockupImg} /> 
                <div className="apoio__content-text">
                    <h2 className="apoio__title">
                        Encontre apoio 
                        sempre que precisar
                    </h2>
                    <p className="apoio__subtitle">
                        Afeeto oferece uma experiência única de conversa com IAs psicólogas, desenvolvidas para ouvir você de maneira acolhedora e proporcionar orientações em momentos de urgência emocional. Sabemos que o cuidado mental vai além das sessões semanais, por isso, aqui você pode buscar suporte imediato e de confiança a qualquer hora do dia. 
                    </p>
                </div>
            </div>
                
        </section>
    )
}