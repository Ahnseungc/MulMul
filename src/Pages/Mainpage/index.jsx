import React,{useState, useEffect} from "react";
import "./styles.css"
import Data from "../../data/mulmul_data"
import Likeitem from "../../componetns/Distpage_list_item";
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Mainpage(){

  const [likeData,setLikeData] = useState(Data);
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
 
// const settings = {
//   dots: true,  // 점은 안 보이게
//   infinite: true, // 무한으로 즐기게
//   speed: 500,
//   slidesToShow: 1, //4장씩 보이게 해주세요
//   slidesToScroll: 1, //1장씩 넘어가세요
// }




 return(
   <div className="Main-main-container">
      <div className="header">
      <h1 className="community">커뮤니티</h1>
      <h1 className="regeister">상품등록하기</h1>
      </div>      
      <div className="body">
        <h1 className="recommend_text">상품 추천</h1>
        <div className="likeitem">
          
        {likeData.map((e)=>{
          return(
            <Likeitem item={e}/>
          )
        })}
        
        </div>
      </div>
   </div>   
 )

    
}