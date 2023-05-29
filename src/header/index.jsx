import React,{useEffect} from "react";
import "./styles.css"





const getLocation =() =>{
    if(navigator.geolocation) {
        return new Promise(res=>{
            navigator.geolocation.getCurrentPosition(
                function(pos){
                    console.info(
                        `re:${pos.coords.latitude} ${pos.coords.longitude}`,
                    );
                    res({
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    });
                },
                function(err) {
                    console.log(err);
                    res({
                        latitude: 37.3595704,
                        longitude: 127.105399,
                    });
                },
                {   
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity,
                },
            )
        }).then(coords =>{
            console.log(`coords:${JSON.stringify(coords)}`);
            return coords;
        });
    }
    console.info("GPS를 지원하지 않습니다.")
    return{
        latitude: 37.3595704,
        longitude: 127.105399,
    };
}


const gsLocation =  getLocation();
const Header = () =>{
    
       
    console.info(`gsLocation: ${JSON.stringify(gsLocation)}`);


 return(
    <div className="header">
      <h1>메인페이지 인디요.</h1>       
       
      </div>
 )
}


export default Header;