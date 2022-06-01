
import './login.css';
import React from "react";
import ReactDOM from "react-dom";

class login extends React.Component{
    render(){
        return ( 
            <div className='contenedor'>
            <img className='avatar_login' src={require('./img/logo.png')}/>
            <h1>Login de usuario</h1>
            <form>
                <label for="username">Username</label>
                <input className='input_user' type="text" placeholder="Usuarios"/>
                <label for="contrasena">Contraseña</label>
                <input className='input_user' type="password" placeholder="Contraseña"/>
                <input className='input_button' type="submit" value="Ingresar"/>
                <p><a href="">¿Olvidaste la contraseña?</a></p>

            </form>
    
        </div>
        );
    }

} export default login;