import React,{useEffect,useState} from "react";
import "./styles.css"
import Listitem from "../../componetns/Distpage_list_item";







export default function Community(){

    const [title, setTitle] =useState('');
    const [count, setCount] =useState(0);
    const completionWord = "당신의 물건을 나누세요"


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


const data_mul =[
    {img : "/Icon/Rectangle_mulmul.png",
     name: "라면",
     gp:"100gp" },
     {img : "/Icon/Rectangle_mulmul.png",
     name: "케찹",
     gp:"100gp" },
     {img : "/Icon/Rectangle_mulmul.png",
     name: "머스타드",
     gp:"100gp" },
     {img : "/Icon/Rectangle_mulmul.png",
     name: "시럽",
     gp:"100gp" },
     {img : "/Icon/Rectangle_mulmul.png",
     name: "딸기",
     gp:"100gp" },
];

console.log(data_mul);
    return(
        <div className="Dist-main-container">
            <div className="left-container">
            <h1>당신의 물건을 나누세요</h1>
            </div>
            <div className="right-container">
            {
                data_mul.map((e)=>{
                    return(
                    <Listitem item={e}/>
                    )
                })
            }
            </div>
        </div>
    )
}