import React,{useState, useEffect} from "react";
import axios from "axios";



const Login = ()=>{
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputId = (e)=>{
        setInputId(e.target.value)
    }

    const handleInputPw = (e)=>{
        setInputPw(e.target.value)
    }
    const onClickLogin =() =>{
        axios.post('http:localhost:8080/user_inform/onLogin',null,{
            params:{
                'user_id' : inputId,
                'user_pw' : inputPw
            }
        }).then(res=>console.log(res))
        .catch()
    }

    useEffect(()=>{
        axios.get("http://localhost:8080/user_inform/login")
        .then(res=>console.log(res))
        .catch()
    },[])

    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor="input_id">ID : </label>
                <input type="text" name="input_id" value={inputId} onChange={handleInputId}/>                
            </div>
            <div>
                <label htmlFor="input_pw">PW : </label>
                <input type="password" name="input_pw" value={inputPw} onChange={handleInputPw}/>                
            </div>
            <div>
                <button type="button" onClick={onClickLogin}>Login</button>
            </div>
        </div>

    )
}

export default Login;