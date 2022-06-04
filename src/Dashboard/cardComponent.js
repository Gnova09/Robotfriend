import React  from "react";
import Card from "./card";


const CardComponent = ({names}) =>{
    const cardlist = names.map((user, i) => {
        return (
        <Card key= {i} name={names[i].name} email={names[i].email} User={names[i].username} />
        );
    });
    return (
    <div>
        {cardlist}
    </div>
    );
}
export default CardComponent;