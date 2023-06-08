import React,{useCallback, useEffect, useState} from "react";
import "./styles.css"
import axios from "axios";


const DistAdd = ()=>{
    const [name,setName] =useState('');
    const [content,setContent] =useState('');
    const [price,setPrice] =useState('');    
    const [img, setImg] =useState('');
    // console.log(product)

    

    const handleNameChange=useCallback((e)=>{
        e.preventDefault();
        setName(e.target.value);   
    },[])
    const handleContentChange=useCallback((e)=>{
        e.preventDefault();
        setContent(e.target.value);            
    },[])
    const handlePriceChange=useCallback((e)=>{
        e.preventDefault();
        setPrice(e.target.value);                    
    },[])

    const handleImgChange =(e)=>{        
        e.preventDefault();
        const uploadimg = e.target.files[0];
        setImg(e.target.files[0]);
    }
       
        function handleSubmit(event){
            event.preventDefault()
            let formData = new FormData();
            
            formData.append('file',img);
            formData.append('name',name);
            formData.append('content',content);
            formData.append('price', price);                                    
            
            axios({
                method:"post",
                url:"/user_inform/productadd",
                data: formData,
                headers:{
                    // "Content-Type": "multipart/form-data",
                }
            }).then(
                (res)=> console.log(res)
            ).catch((err)=>console.log(err))
        }

    return(
        <div className="add-container">        
            <h1>상품 추가 페이지 </h1>    
            <hr></hr>
            <br></br><br></br><br></br>
            
            <form >
                상품 이름 : <input type="text" className="pname" name="name"
                 value={name}   id="title"            
                 onChange={handleNameChange}
                />
                <br></br><br></br>
                상품 설명 : <input type="text" className="content" name="content"
                 value={content}            
                 onChange={handleContentChange}
                />
                <br></br><br></br>
                상품 가격(GP) : <input type="text" className="price" name="price"
                 value={price}                
                 onChange={handlePriceChange}
                />
                <br></br><br></br>
                상품 이미지 : <input type="file" className="img" name="img"
                          accept='image/jpg,impge/png,image/jpeg,image/gif'  
                          onChange={handleImgChange}   
                />      
                <br></br><br></br>               
              
                <button type="submit" className="save_btn" onClick={handleSubmit}>저장</button>
                                
            </form>            
            <hr/>
            <h3>현재 까지 추가한 상품</h3>
        </div>
    )
}

export default DistAdd;