// import {useState, useEffect} from "react";



// const useGeoloaction = () =>{
//     const [loaction, setLocation] = useState({
//         loaded: false,
//         coordinates: {lat: 0, lng: 0,}
//     })

//     //성공에 대한 로직
//     const onSuccess = (location)=>{
//         setLocation({
//             loaded: true,
//             coordinates :{
//                 lat : location.coords.latitude,
//                 lng: location.coords.longitude,
//             }
//         })
//     }

//     const onError =(err)=>{
//         setLocation({
//             loaded: true,
//             err,
//         })
//     }

//     useEffect(()=>{
//         if(!("geolocation"in navigator)){
//             onError({
//                 code: 0,
//                 message: "Geoloaction not supported",
//             })
//         }
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     },[])
//     return loaction;    
// }

// export default useGeoloaction;