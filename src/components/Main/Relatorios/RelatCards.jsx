import React from "react";
import "./relat.css";
import sparkleImg from "../../../../images/relat__sparkle.png";

export default function RelatCard(data){
    const {title, text} = data.props;

    return(
        <li className="relat__card">
            <div className="relat__cardbox">
                <img src={sparkleImg} alt="sparkle icon" className="relat__sparkleImg"/>
                <div className="relat__card-content">
                    <h3 className="relat__card-title">
                        {title}
                    </h3>
                    <p className="relat__card-text">
                        {text}
                    </p>
                </div>
            </div>
            <div className="relat__card-shadow" />
        </li>
    )
}