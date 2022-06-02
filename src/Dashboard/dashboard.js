import React, {Component} from "react";
import './dashboard.css';
import {names} from "./names.js";
import CardComponent from './cardComponent';


class dashboard extends Component {
    constructor(){
        super()
        this.state = {
            props_name: names,
            btn_sidebar: ''
        }
    }
    onclick_btnsidebar(event){
        const side = document.getElementById("side");

        if (side.classList.contains('close')) {
          side.classList.replace('close', 'active');
        } else {
            side.classList.replace('active', 'close');
        }
    }
    render(){
        this.setState(this.state);
        return (
            <div className ='body'>
                {/* SECCION DEL SIDEBAR */}
                <div id="side"className ='sidebar close'>
                    <ul>
                        <li className ='logo'>
                            <img className ='avatar' src={require('../img/logo.png')} alt="logo"/>
                            <p>Nombre Empresa</p>
                        </li>
                        <li>
                            <img src={require('../icons/new-user.png')} alt="Add user"/>
                            <p> Agregar Usuario</p> </li>
                        <li>
                            <img src={require('../icons/lista.png')} alt="Add user"/> 
                            <p>Lista de Usuarios</p> </li>
                    </ul>
                </div>  

                {/* SECCION DEL HEADER Y COMPONENTES  */}
                
                <div className ='contenedor'>
                    <div className ='superiobar'>
                        <div>
                            <span onClick={this.onclick_btnsidebar} className ='sidebar-btn' >&#9776;</span>
                        </div>
                    </div>

                    <div className ='card tc pa3'>
                    <CardComponent names={this.state.props_name} /> 
                    </div>
                </div>       
            </div>
        );
    }
} 
export default dashboard;