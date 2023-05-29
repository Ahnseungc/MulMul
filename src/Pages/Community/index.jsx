import React from "react";
import "./styles.css"
import Community_com from "../../componetns/Community_com"

export default function Community(){

    const userList =[
        {   user_img:"/",
            title:"배달 같이 시키실분~",
        },
        {   user_img:"/",
            title:"배달 같이 시키실분~",
        },
        {   user_img:"/",
            title:"배달 같이 시키실분~",
        },
    ]


    return(
        <div className="community-main-container">
            {
                userList.map((e)=>{
                    return(
                        <Community_com props={e}/>
                    )
                })
            }
            
        </div>
    )
}