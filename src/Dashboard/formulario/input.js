import React from "react";
import InputCard from './inputCard'

const CardComponent = ({formNuser}) =>{
    const cardlist = formNuser.map((user, i) => {
        return (
           <InputCard key= {i} id={formNuser[i].id} name={formNuser[i].name} tipo={formNuser[i].tipo}/>
        );
    });
    return (
    <div>
        {cardlist}
    </div>
    );
}
export default CardComponent;