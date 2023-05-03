import React from "react";
import "./styles.css"



export default function listitem(item){

    return(
        <li className="listitem">
            <img src={item.item.img}></img>
            <div className="text-box">
            <h1>{item.item.name}</h1>
            <h3>{item.item.gp}</h3>
            </div>
        </li>
    )
}