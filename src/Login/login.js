
import './login.css';
import React from "react";

class login extends React.Component{
    render(){
        return ( 
            <div class = "drop_contenedor">
            <div class="drop">
                <i class ="fa-solid icon"></i>
                <span class="text">
                    Suelta aqui tus documentos, fotos y videos.
                </span>
                <div class="or-con">
                    <span class="line"></span>
                    <span class="or">OR</span>
                    <span class="line"></span>
                </div>
                <label for="file-upload">Buscado de documentos</label>
                <input type="file" id="file-upload" class="file-input" multiple/>
            </div>
           <div class="Progreso"></div>
        </div>
        );
    }

} export default login;