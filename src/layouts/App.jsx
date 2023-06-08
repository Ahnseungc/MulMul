
import './App.css';
import Sidebar from '../componetns/Sidebar'
import Community from '../Pages/Community';
import Distpage from "../Pages/Distpage"
import Mainpage from '../Pages/Mainpage';
import {Route,Routes} from "react-router-dom"
import Header from '../header';
import Distpurchase from '../Pages/DistPurchase/App';
import React,{useEffect, useState} from 'react';
import Data from "../data/mulmul_data";
import Login from '../Pages/Login';
import DistAdd from '../Pages/DIstAdd';
import Communityadd from '../Pages/Community_plus';
import communitydata from '../data/community_data';
import Communityregeister from '../Pages/Community_regeister';



function App() {

  const  [item,setItem] = useState(Data);
  const  [citem,setcItem] = useState(communitydata);
  
  console.log(citem);
  const [isLogin, setIsLogin] =useState(false);

  useEffect(()=>{
    if(sessionStorage.getItem('user_id')===null){
        console.log('isLogin ?? :: ', isLogin)
    }
    else{
      setIsLogin(true)
    }
  })

  return (
    <div className="App">     
    <div className="sidebar">
        <Sidebar/>
    </div>
    <div className="header_layout">
    {isLogin ? <Header isLogin={isLogin}/>: <Header/>}
    <hr/>    
    <Routes>    
    <Route path='/' element={<Mainpage />}/>
    <Route path='/dist' element={<Distpage/>}/>
    <Route path='/dist/:id' element={<Distpurchase item={item}/>}/>
    
    <Route path='/Login' element={ isLogin ? <Mainpage/> :
    <Login/>
    }/> 
     <Route path='/products' element={<DistAdd />}/>  
     <Route path='/community' element={<Community/>}/>
     <Route path='/community/:id' element={<Communityadd item={citem}/>}/>
     <Route path='/communityregeister' element={<Communityregeister/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
