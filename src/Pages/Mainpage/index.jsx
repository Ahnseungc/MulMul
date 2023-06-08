/*global kakao*/ 
import React,{useState, useEffect} from "react";
import Community from "../../componetns/Community_com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComment, faPlus} from "@fortawesome/free-solid-svg-icons"
import "./styles.css"
import Data from "../../data/mulmul_data"
import Likeitem from "../../componetns/Distpage_list_item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {getLocation} from "../../hooks/getCurrentPosition";
const {kakao} = window;



export default function Mainpage(){

  const [likeData,setLikeData] = useState(Data);
  const[latitude, setLatitude] = React.useState("");
   const[longitude, setLongitude] = React.useState("");
   const location = getLocation()
   .then((value)=>{
      setLatitude(value.latitude)
      setLongitude(value.longitude)
      })
   .catch((err)=>console.log(err));   
   console.log(latitude,longitude)
      

  useEffect(()=>{//상품애니메이션
    var item = document.querySelectorAll('.listitem')
    var cnt =0;
    const activeFunc =()=>{
        item[cnt].classList.add('active');
        cnt++;
        if(cnt >= item.length){
            clearInterval(addActive)
        }
    }
    var addActive = setInterval(activeFunc,130);
},[])

useEffect(()=>{
      const container = document.getElementById('map');
      const options ={
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 3
      };
    const map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(
      37.62197524055062,
      127.16017523675508
);
let marker = new kakao.maps.Marker({
  position: markerPosition,
});

marker.setMap(map);
},[])




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
   <div className="Main-main-container">
      <div className="header">
      <Link to={"/community"}style={{textDecoration:"none", 
      color:"black"
      }}><h1 className="community"><FontAwesomeIcon icon={faComment}/></h1></Link>
      <Link to={"/products"} style={{textDecoration:"none", 
      color:"black"
      }}><h1 className="regeister"><FontAwesomeIcon icon={faPlus}/></h1></Link>
      </div>      
      <div className="body">
        <div className="like">
        <h1 className="recommend_text">금주의 추천 상품</h1>
        <hr></hr>
        <div className="likeitem">
          
        {likeData.map((e)=>{
          return(
            <Likeitem item={e}/>
          )
        })}        
        </div>
        
      </div>
      <div id="map" className="k_map">
        </div>        
      </div>
   </div>   
 )

    
}