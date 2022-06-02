import React from "react";
import './login.css';

const onclick_login = (event)=> {
    // const side = document.getElementById("side");
    //     side.classList.toggle('close');
}

const Login = () =>{
        return ( 
            
                <div className='contenedor_login cuerpo'>
                    <img className='avatar_login' src={require('../img/logo.png')} alt="ava_logo"/>
                    <h1>Login de usuario</h1>
                    <form>
                        <label for="username">Username</label>
                        <input className='input_user' type="text" placeholder="Usuarios"/>
                        <label for="contrasena">Contraseña</label>
                        <input className='input_user' type="password" placeholder="Contraseña"/>
                        <a href="/Dashboard/dashboard">
                            <input 
                                className='input_button'
                                type="submit" 
                                onClick= {onclick_login}
                                value="Ingresar">
                            </input>
                        </a>
                        <p><a href="">¿Olvidaste la contraseña?</a></p>
                    </form>
                </div>
            
        );
    }
export default Login;