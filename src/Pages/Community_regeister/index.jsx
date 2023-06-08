import React, { useState } from "react";
import "./styles.css"
import Table from "react-bootstrap/Table"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form"
import axios from "axios";
import { Link } from "react-router-dom";

const Communityregeister =() =>{

    const [header,setHeader] =useState("");
    const [body,setBody] =useState("");
    const [sig,setSig] = useState(false);

    const headerChange =(e)=>{
        setHeader(e.target.value);
        console.log(header);
    }

    const bodyChange =(e)=>{
        setBody(e.target.value);
        console.log(body);
    }


    
    const submit = ()=>{
        axios.post("/user_inform/community",{
            header: header,
            body: body,
            user: sessionStorage.getItem('user_id')
        }).then((res)=>{
            console.log(res);
            setSig(true);
        }
        ).catch((err)=>{
            console.log(err);
        })
    }

 




    return(
        <div className="maincontainer_ref">

            <Form style={{textAlign:"center", padding:"20px"}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControllInput1">                    
                    <Form.Label><h3>제목을 입력하세요</h3></Form.Label>
                        <Form.Control type="email" placeholder="" onChange={headerChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label><h3>내용을 입력하세요</h3></Form.Label>
                    <Form.Control as="textarea" style={{height:"300px"}} onChange={bodyChange}/>
                    </Form.Group>

            </Form>                       
        <Link to={"/community"} style={{textDecoration:"none"}}>
        <button className="write_btn" onClick={submit}><p>글 쓰기</p></button>
        </Link>
    </div>
    )
}

export default Communityregeister
