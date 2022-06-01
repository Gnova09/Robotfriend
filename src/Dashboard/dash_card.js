import React from "react";

const dash_card = (props) =>{

    return(
        
            <div className = ' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt="photo" src={`https://robohash.org/${props.name}`}/>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
            </div>
        
    );
}
export default dash_card;