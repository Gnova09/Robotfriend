import React from "react";
import './dashboard.css';
import CardComponent from './cardComponent';


const dashboard = ({props}) => {
    return (
        <div className ='body'>
            {/* SECCION DEL SIDEBAR */}
            <div className ='sidebar active'>
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
                        <span className ='sidebar-btn' >&#9776;</span>
                    </div>
                </div>

                <div className ='card tc pa3'>
                   <CardComponent names={props} /> 
                </div>
            </div>       
        </div>
    );
} 
export default dashboard;