import React from "react";
import "./styles.css"


const Community = (props)=>{

// console.log(props.props.title);
    return(
        <div className="container">
            <div className="user">
                <img src="/" alt="/" />
            </div>
            <div className="title">
                <h1>{props.props.title}</h1>
            </div>
        </div>

    )
}

export default Community