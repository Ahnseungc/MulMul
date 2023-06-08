import React,{useEffect,useState} from "react";
import "./styles.css"
import Community_com from "../../componetns/Community_com"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import community_data from "../../data/community_data";
import axios from "axios";

export default function Community(){

    const [userList,setUserList] = useState(community_data);
    const [data,setData] =useState();

    useEffect(()=>{
        axios.get("/community",{        
        }).then(res=>console.log(res)
        ).catch(
            err=>console.log(err)
            )

    },[])
    

   
    return(
        <div className="community-main-container">
            <div className="header">
            <Link to={"/communityregeister"} style={{marginTop:"2%",marginRight:"5%", textDecoration:"none", color:"white"}}>
            <p>글쓰기</p>
            </Link>
            </div>
            {
                userList.map((e)=>{
                    console.log(e);
                    return(
                        <Community_com props={e}/>
                    )
                })
            }
            
        </div>
    )
}