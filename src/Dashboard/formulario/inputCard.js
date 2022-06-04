import React from "react";

const input_form = (props) =>{
    const {id, name, tipo} = props;
        return(
            <div>
               <input required id={`${props.id}`} className='input_user ' type={`${props.tipo}`} placeholder={`${props.name}`}/> 
            </div>
        );
    }
export default input_form