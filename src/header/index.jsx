/*global kakao*/
import React,{useEffect, useState, useMemo} from "react";
import { getLocation } from "../hooks/getCurrentPosition";
import axios from "axios";
import "./styles.css"
import { Link } from "react-router-dom";



const Header = () =>{    
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
  
       
   

 return(
    <div className="header">
      <Link to={"/Login"}><h1>유저 정보인디요.</h1></Link>
       <h2>{address}</h2>
      </div>
 )
}


export default Header;