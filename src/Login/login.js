import React from "react";
import { Link , BrowserRouter as Router} from "react-router-dom";
import './login.css';

const validacion=()=>{
    
    return "/dash"
   
}

const Login = () =>{
      return ( 
          <div className="login">
                <div className='contenedor_login'>
                    <img className='avatar_login' src={require('../img/logo.png')} alt="ava_logo"/>
                    <h2>Universidad Pedro Henriquez Ureña</h2>
                    <form id="form" onSubmit={validacion} >
                        <input required id="user" className='input_user ' type="text" placeholder="Usuarios"/> 
                        <input required id="pass" className='input_user ' type="password" placeholder="Contraseña"/>
                        <Link require form="form" to="/dash"
                            className='input_button' type="Submit" > Ingresar </Link>
                    </form>
                    
                        <p><a href="" >¿Olvidaste la contraseña?</a></p>
                </div>  
                </div>   
        );
    }
export default Login;