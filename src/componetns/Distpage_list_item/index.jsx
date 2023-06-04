import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";



export default function listitem(item){



    // console.log(item.item.id)
    return(
        <li className="listitem" onClick={()=>{
            document.location.href=`/dist/${item.item.id}`
        }}>
            <img src="" alt="/"></img>
            <div className="text-box">
            <h1>{item.item.name}</h1>
            <h3>{item.item.gp}</h3>
            </div>
        </li>
    )
}