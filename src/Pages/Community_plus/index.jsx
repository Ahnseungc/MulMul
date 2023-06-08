import "./styles.css"
import React from "react" 
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Communityadd =(props)=>{

    const {id} =useParams();
    console.log("addprops",props.item[0].id);
    console.log(id);
    const items =props.item;
    console.log(items);

    const findItem = items.find((e)=>{        
        return e.id ===parseInt(id);
    })
    console.log(findItem);

    return(
        <div className="maincontainer_add">
            <div className="header_add">
                <h1>{findItem.title}</h1>
                <Link to={"/community"}>
                <FontAwesomeIcon  icon={faArrowLeft} className="back_btn_add"/>
                </Link>
            </div>
            <hr/>
            <div className="body_add">
               <p> {
                    findItem.content
                }
                </p>
            </div>
        </div>
    );
}

export default Communityadd;