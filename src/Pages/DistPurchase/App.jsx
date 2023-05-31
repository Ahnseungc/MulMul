import React from "react";
import "./styles.css"
import { useParams } from "react-router-dom";


const Distpurchase = (props)=>{

    const {id }=  useParams();
    const items =props.item;
    console.log(items);

    const findItem = items.find((e)=>{        
        return e.id ===parseInt(id);
    })

    console.log(findItem);


    return(
        <div className="purchase-container">
            <div className="user"></div>
        <div className="purchase-main-container">
            <div className="img_name">
            <div className="image">                    
                </div>
                <div className="name">                    
                <h1>{findItem.name}</h1>
                </div>
            </div>
            
            <div className="content-container">                
            <div className="header-text"> <h2>userid</h2></div>
                <div className="text">
                    <h2>{findItem.content}</h2>
                </div>
                <div className="content-container-footer">
                <div className="purchase_btn">
                <h2>구매</h2>    
                </div>                                                                    
                <div className="Gp">
                    <h2>{findItem.gp}</h2>
                </div>
                </div>
            </div>
        </div>
        </div>
    )

}


export default Distpurchase

