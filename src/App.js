 import { render } from "@testing-library/react";
import React from "react";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Dashboardrout from './Dashboard/dashboard';
 import Login from './Login/login';

 const App =()=> {
     
     return(
         <div>
         <Router>
                <Routes>
                    <Route path="/" element={<Login/>} />
                </Routes> 
                <Routes>
                    <Route path="/dash" element={<Dashboardrout/>} />
                </Routes> 
         </Router>
         </div>
        );
 }
 export default App;
