import React from "react";
import { Link , BrowserRouter as Router} from "react-router-dom";
import './Newuser.css';
import Input from './input'
import { formNuser } from "./formNuser";


const validacion=()=>{
    
    //apartado para validar los campos
   
}

const Login = () =>{
    return ( 
        <div className="login">
              <div className='contenedor_login'>
                  <img className='avatar_login' src={require('../../img/logo.png')} alt="ava_logo"/>
                  <h2>Creacion de usuario</h2>
                  <form id="form" onSubmit={validacion}>
                        <Input formNuser = {formNuser}/>
                        <Link form="form" to="/dash"
                          className='input_button' type="Submit">Nuevo Usuario</Link>
                  </form>
                  <Link  to="/dash"
                          className='input_button' type="Submit">volver</Link>
              </div>  
            </div>   
      );
  }
export default Login;