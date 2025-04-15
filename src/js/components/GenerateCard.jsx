import React from "react";
import { useState } from "react";



export const GenerateCards = () => {


  const [card ,setCard] = useState({
   number:"",
   suit:"",
   color:"black", 
  })

 const  generateCardRandom =()=> {
      let randomSuit = Math.floor((Math.random() * 4) + 1);
      let randomNumber = Math.floor(Math.random() * 13);
      
      
      const numberCard =(randomNum)=> {
      
        if (randomNum === 0) return "A";
        if (randomNum === 10) return "J";
        if (randomNum === 11) return "Q";
        if (randomNum === 12) return "K";
        return (randomNum + 1).toString();
      
      }
      
      
      
      const joinIconNumber = (suit) => {
        if (suit === 1) return '♠';
        if (suit === 2) return '♣';
        if (suit === 3) return '♥';
        return '♦';
      }
      
      
      
      const newNumber = numberCard(randomNumber);
      const newSuit = joinIconNumber(randomSuit);
      const newColor = (randomSuit === 1 || randomSuit === 2) ? 'black' : 'red';
      
      
      const cardStyle = {
        width: '350px',
        height: '500px',
        border: '1px solid black',
        margin: '20px auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '10px'
      };
    
      const iconStyle = {
        fontSize: '24px',
        color: card.color === 'black' ? 'black' : 'red',
        alignSelf: card.color === 'black' ? 'flex-start' : 'flex-end'
      };
    
      const numberStyle = {
        fontSize: '48px',
        textAlign: 'center',
        color: card.color === 'black' ? 'black' : 'red',
        margin: '20px 0'
      };
      
     
    };

      
  

  return (
    <>
      <div className="container-fluid text-center card my-5 border border-black ">
        <div style={iconStyle}>{card.newSuit}</div>
        <div style={cardStyle}>{card.newColor}</div>
        <div style={numberStyle}>{card.newNumber}</div>
      </div>
    

      <div className="d-flex justify-content-center my-5">
        <button type="button" className=" btn btn-primary" id="but-generate" onClick={GenerateCards}>Generar Carta</button>
      </div>
    </>

  )
};
