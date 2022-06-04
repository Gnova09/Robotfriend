import React from "react";
import { Link } from "react-router-dom";
import Datalist from './datalist'

const onclick_btnsidebar=()=>{
    const side = document.getElementById("side");
        side.classList.toggle('close');
}

const Userlist = ()=>{
    return(
        <div className ='body'>
                {/* SECCION DEL SIDEBAR */}
                <div id="side" className ='sidebar close'>
                    <ul>
                        <Link to="/dash">
                        <li className ='logo' onClick={onclick_btnsidebar}>
                            <img   className ='logoins' src={require('../../img/logo.png')} alt="logo"/>
                            <p>Universidas Pedro Henrique Ureña</p>
                        </li></Link>
                        <Link to="/dash/newuser">
                        <li>
                                <img  src={require('../../icons/new-user.png')} alt="Add user"/>
                                <p> Agregar Usuario</p> 
                        </li>
                        </Link>
                        <Link to="/dash/list">
                            <li>
                                <img  src={require('../../icons/lista.png')} alt="Add user"/> 
                                <p>Lista de Usuarios</p> 
                            </li>
                        </Link>
                    </ul>
                </div>  

                {/* SECCION DEL HEADER Y COMPONENTES  */}
                
                <div className ='contenedor'>
                    <div className ='superiobar'>
                        <div>
                            <span onClick={onclick_btnsidebar} className ='sidebar-btn' >&#9776;</span>
                        </div>
                        <div className="avartar_con">
                            <img className="avatar" src={require('../../icons/user.png')}></img>
                        </div>
                    </div>

                    <div id="card" className =' tc pa3'>
                           <Datalist/>
                    </div>
                </div>       
            </div>
    );
}
export default Userlist