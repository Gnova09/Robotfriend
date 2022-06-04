import React from "react";

const Card = (props) =>{
const {name, email, User} = props;
    return(
        <div className = ' tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="placeholder" src={`${props.name}`}/>
            <div>
                <h2>{User}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;