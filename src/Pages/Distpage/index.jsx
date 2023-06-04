import React,{useEffect,useState} from "react";
import "./styles.css"
import Listitem from "../../componetns/Distpage_list_item";
import Data from "../../data/mulmul_data";
import axios from "axios";

export default function Community(){


    axios.get(
        "/products"
    ).then((res)=>
    {
        console.log(res);
        

    })    

    const [items, setItems] = useState(Data);


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

// useEffect(()=>{
//     const typingInterval = setInterval(()=>{
//         setTitle((prev)=>{
//             let result = prev ? prev + completionWord[count] : completionWord[0]
//             // console.log(result);
//             setCount(count +1);
//             if(count >= completionWord.length){
//                 setCount(0);
//                 setTitle('');
//             }

//             return result
//         })
//     },300);
//     return ()=> {
//         clearInterval(typingInterval);
//     }
    
// })




console.log(Data);
    return(
        <div className="Dist-main-container">
            <div className="left-container">
            <h1>당신의 물건을 나누세요</h1>
            </div>
            <div className="right-container">
            {
                Data.map((e)=>{
                    return(
                    <Listitem key={e.id} item={e}/>
                    )
                })
            }
            </div>
        </div>
    )
}