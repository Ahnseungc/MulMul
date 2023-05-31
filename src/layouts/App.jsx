
import './App.css';
import Sidebar from '../componetns/Sidebar'
import Community from '../Pages/Community';
import Distpage from "../Pages/Distpage"
import Mainpage from '../Pages/Mainpage';
import {Route,Routes} from "react-router-dom"
import Header from '../header';
import Distpurchase from '../Pages/DistPurchase/App';
import React,{useState} from 'react';
import Data from "../data/mulmul_data";


function App() {

  const  [item,setItem] = useState(Data);

  console.log(item);
  return (
    <div className="App">     
    <div className="sidebar">
        <Sidebar/>
    </div>
    <div className="header_layout">
    <Header />
    <hr/>    
    <Routes>    
    <Route path='/' element={<Mainpage />}/>
    <Route path='/dist' element={<Distpage/>}/>
    <Route path='/dist/:id' element={<Distpurchase item={item}/>}/>
    <Route path='/community' element={<Community/>}/>    
    </Routes>
    </div>
    </div>
  );
}

export default App;
