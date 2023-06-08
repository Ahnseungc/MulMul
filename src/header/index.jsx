/*global kakao*/
import React,{useEffect, useState, useMemo} from "react";
import { getLocation } from "../hooks/getCurrentPosition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faDoorClosed} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./styles.css"
import { Link } from "react-router-dom";



const Header = (props) =>{    
   console.log(props.name);
   const[latitude, setLatitude] = React.useState("");
   const[longitude, setLongitude] = React.useState("");
   const [address, setAddress] = useState("");
   const location = getLocation()
   .then((value)=>{
      setLatitude(value.latitude)
      setLongitude(value.longitude)
      })
   .catch((err)=>console.log(err));    
   console.log("위도 경도", latitude, longitude);
   // d5367a0e73b632517ae0d49d1c1b6a4a
   
   const getAddr =() =>{
      let geocoder = new kakao.maps.services.Geocoder();
      let coord = new kakao.maps.LatLng(latitude, longitude);
      let callback = function(result, status) {
         if(status === kakao.maps.services.Status.OK){
            const arr = [...result];
            const _arr = arr[0].address.address_name;
            setAddress(_arr);
            console.log(_arr);
         }
      }
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
   }
   useEffect(()=>{
      getAddr(latitude, longitude);
  })
  
  const onLogout =() =>{
   sessionStorage.removeItem('user_id')
   document.location.href ="/"
  }
       
   

 return(
    <div className="header">
      {props.isLogin ? 
      <h1 onClick={onLogout} className="login">
         <FontAwesomeIcon icon={faDoorOpen}/>
         
         {sessionStorage.getItem('user_id')}
         </h1>
       :
      <Link to={"/Login"} style={{textDecoration:"none", color:"black", marginLeft:"5%",color:"#FBC575"}}><h1 className="login">
         <FontAwesomeIcon icon={faDoorClosed}/>
         </h1></Link>
      }
      
       <h2 className="address">현재 주소 : {address}</h2>
      </div>
 )
}


export default Header;