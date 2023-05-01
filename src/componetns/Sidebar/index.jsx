import React from "react";
import './styles.css';
import {Link} from "react-router-dom";


export default function Sidebar (){


    return(
        <div className="main-container">
            <div className="sidebar-header">
                <h1>물물 나눔</h1>
            </div>
            <hr/>
            <div className="options">
            
            <div className="mainpage">
                    <Link to="/"
                    style={{textDecoration:"none",
                    color:"black"
                    }}
                    >
                    메인페이지
                    </Link>
            </div>
            
            <div className="nanum">
                <Link to='/dist'
                style={{textDecoration:"none",
                color:"black"}}
                >
                물물 나눔
                </Link>   
            </div>
            
            <div className="community">
                <Link to='community'
                style={{textDecoration:"none",
                color:"black"}}
                >
                커뮤니티
                </Link>
            </div>
            
            </div>
        </div>
    )
}