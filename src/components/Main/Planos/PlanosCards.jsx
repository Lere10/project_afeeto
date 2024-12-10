import React from "react";
import "./planos.css";
import line from "../../../../images/planos__card-line.png";
import sparkle from "../../../../images/list-sparkle.png";

export default function PlanCard (props){
    const {title, price, benefits} = props.data;

    return(
        <li className="planos__card">
            <div className="planos__cardbox">
                <h3 className="planos__card-title">
                    {title}
                </h3>
                <p>
                    {price}
                </p>
                <img className="planos__line" src={line} alt="tiny green line with a star" />
                <ul className="planos__benefits">
                    {benefits.map((benefit, index)=>(
                        <li className="planos__benefit" key={index} style={{ listStyleImage: `url(${sparkle})`}}>
                            {benefit}
                        </li>
                    ))}
                </ul>
                <button className="planos__button">
                    Obter plano
                </button>
            </div>
        </li>
    )
}