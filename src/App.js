
import React from "react";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Dashboardrout from './Dashboard/dashboard';
 import Login from './Login/login';
 import NewUser from './Dashboard/formulario/newUser';
 import Userlist from './Dashboard/lista/userlist'
 

 const App =()=> {
     
     return(
         <div>
         <Router>
                <Routes>
                    <Route  path="/" element={<Login/>} />
                    <Route path="/dash" element={<Dashboardrout/>} />
                    <Route path="/dash/newUser" element={<NewUser />} />
                    <Route path="/dash/list" element={<Userlist />} />
                </Routes> 
         </Router>
         </div>
        );
 }
 export default App;
