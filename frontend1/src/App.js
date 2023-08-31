import './App.css';
import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import DashSidebar from './Components/DashSidebar';
import {Login} from './Components/Login';
import {Register} from './Components/Register';


function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div>    
    <Router>
        <Routes>
          <Route path="/Dasboard" element={ user  ? <DashSidebar/> : <Login /> } />
          <Route path="/Login" element={ <Login setLoginUser={setLoginUser} /> } />
          <Route path="/Register" element={ <Register/> } />
        </Routes>      
    </Router>
    </div>
  );
}

export default App;
