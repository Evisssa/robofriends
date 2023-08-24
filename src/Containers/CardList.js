import React from "react";
import Card from "./Card";

const CardList=({robots})=>{

     const card_l = robots.map( robot =>  <Card key={robot.id}         
         id={robot.id} name={robot.name} email={robot.email}/>
            );
      
     return(
        <div>{card_l}</div>
        
    );
}

export default CardList;