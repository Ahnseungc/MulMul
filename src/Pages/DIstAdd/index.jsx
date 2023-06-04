import React,{useCallback, useState} from "react";
import "./styles.css"
import axios from "axios";


const DistAdd = ()=>{
    const [name,setName] =useState('');
    const [content,setContent] =useState('');
    const [price,setPrice] =useState('');    
    const [img, setImg] =useState('');
    // console.log(product)

    

    const handleNameChange=useCallback((e)=>{
            setName(e.target.value);   
    },[])
    const handleContentChange=useCallback((e)=>{
        setContent(e.target.value);            
    },[])
    const handlePriceChange=useCallback((e)=>{
        setPrice(e.target.value);     
               
    },[])

    const handleImgChange =(e)=>{        
        setImg(e.target.value)        
    }
    
        const upload = async(e)=>{
            e.preventDefault();                      

            var frm = new FormData();
            frm.append("name",name)
            frm.append("price",price)
            frm.append("content",content)
            frm.append("img",img);

            axios.post('/user_inform/productadd',{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: {
                   data: frm,
                }                             
            }).then(res=>console.log(res))
            .catch(err=>err);
        }
    

    return(
        <div className="add-container">        
            <h1>상품 추가 페이지 </h1>    
            <hr></hr>
            <br></br><br></br><br></br>
            
            <form  encType="multipart/form-data"
            onSubmit={upload}
            >
                상품 이미지 : <input type="file" className="img" name="p_img"
                          accept='image/jpg,impge/png,image/jpeg,image/gif'  
                          onChange={handleImgChange}   
                />
                <br></br><br></br>
                상품 이름 : <input type="text" className="pname" name="p_name"
                 value={name}   id="title"            
                 onChange={handleNameChange}
                />
                <br></br><br></br>
                상품 설명 : <input type="text" className="content" name="p_content"
                 value={content}            
                 onChange={handleContentChange}
                />
                <br></br><br></br>
                상품 가격 : <input type="text" className="price" name="p_price"
                 value={price}                
                 onChange={handlePriceChange}
                />                     
                <br></br>           
                <button type="submit" className="save_btn">저장</button>
                <button className="back_btn">뒤로</button>                
            </form>
            <hr></hr>
        </div>
    )
}

export default DistAdd;