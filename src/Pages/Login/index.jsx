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
        axios.post('/user_inform/onLogin',null,{
            params:{
                'user_id' : inputId,
                'user_pw' : inputPw
            }
        }).then(res=>{
            console.log(res)
            console.log('res.data.userId ::', res.data.Id)
            console.log('res.data.userpw ::', res.data.Password);
            if(res.data.Id === undefined){
                    alert('입력하신 id가 일치하지 않습니다.');
            }
            else if(res.data.Id ===null){
                alert('입력하신 비밀번호가 일치 하지 않습니다.');
            }
            else if(res.data.Id===inputId){
                console.log("로그인 성공");
                sessionStorage.setItem("user_id", inputId)
                document.location.href="/"
            }            
            }
            )
        .catch()
    }

    useEffect(()=>{
        axios.get("/user_inform/login")
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