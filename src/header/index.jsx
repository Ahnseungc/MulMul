/*global kakao*/
import React,{useEffect, useState, useMemo} from "react";
import { getLocation } from "../hooks/getCurrentPosition";
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
      <h1 onClick={onLogout}>{sessionStorage.getItem('user_id')}</h1>
       :
      <Link to={"/Login"} style={{textDecoration:"none", color:"black"}}><h1>로그인하러가기</h1></Link>
      }
      
       <h2>{address}</h2>
      </div>
 )
}


export default Header;