import React, {Component} from "react";
import './dashboard.css';
import {names} from './names';
import { formNuser } from "./formulario/formNuser";
import CardComponent from './cardComponent';
import NewUser from './formulario/newUser';
import { Link } from "react-router-dom";



class dashboard extends Component  {
   
    constructor(){
        super()
        this.state = {
            props_name: names,
            btn_sidebar: <CardComponent names={names}/>
        }
    }
    onclick_btnsidebar(event){
        const side = document.getElementById("side");
            side.classList.toggle('close');
    }
    onclick_btnsidebar_newuser(event){
      this.state.btn_sidebar= <NewUser formNuser={formNuser}/>
    }
    

    render(){
       
        return (
            <div className ='body'>
                {/* SECCION DEL SIDEBAR */}
                <div id="side" className ='sidebar close'>
                    <ul>
                        <li className ='logo' onClick={this.onclick_btnsidebar}>
                            <img   className ='logoins' src={require('../img/logo.png')} alt="logo"/>
                            <p>Universidas Pedro Henrique Ureña</p>
                        </li>
                        <Link to="/dash/newuser">
                        <li>
                                <img  src={require('../icons/new-user.png')} alt="Add user"/>
                                <p> Agregar Usuario</p> 
                        </li>
                        </Link>
                        <Link to="/dash/list">
                            <li>
                                <img  src={require('../icons/lista.png')} alt="Add user"/> 
                                <p>Lista de Usuarios</p> 
                            </li>
                        </Link>
                    </ul>
                </div>  

                {/* SECCION DEL HEADER Y COMPONENTES  */}
                
                <div className ='contenedor'>
                    <div className ='superiobar'>
                        <div>
                            <span onClick={this.onclick_btnsidebar} className ='sidebar-btn' >&#9776;</span>
                        </div>
                        <Link to="/">
                            <div className="avatar_con">
                                <img className="avatar" src={require('../icons/user.png')}></img>
                            </div>
                        </Link>
                    </div>

                    <div id="card" className =' tc pa3'>
                           {this.state.btn_sidebar}
                    </div>
                </div>       
            </div>
        );
    }
} 
export default dashboard;