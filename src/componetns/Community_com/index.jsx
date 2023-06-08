import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";

const Community = (props)=>{


    console.log(props.props.id);


    return(
        
        <Link to={`/community/${props.props.id}`} style={{textDecoration:"none" ,color:"white"}}>
        <div className="container">
            <div className="user">
                <img src="/" alt="/" />
            </div>
            <div className="title">
                <h1>{props.props.title}</h1>
            </div>
        </div>
        </Link>

    )
}

export default Community