
import './App.css';
import Sidebar from '../componetns/Sidebar'
import Community from '../Pages/Community';
import Distpage from "../Pages/Distpage"
import Mainpage from '../Pages/Mainpage';
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <div className="App"> 
    <div className="sidebar">
        <Sidebar/>
    </div>
    <Routes>
    
    <Route path='/' element={<Mainpage />}/>
    <Route path='/dist' element={<Distpage/>}/>
    <Route path='/community' element={<Community/>}/>    
    </Routes>
    </div>
  );
}

export default App;
