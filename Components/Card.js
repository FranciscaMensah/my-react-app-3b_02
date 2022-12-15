import React from 'react';
import { IoStar } from 'react-icons/io5';

export default function Card(props){  
    return(
        <div className="card">
            {props.isSold === true && <div className='card--badge'>SOLD OUT</div>}
            <div className='card--image--div'>
            <img className="card--image" src={props.image} alt="Girl Chef"/>
            </div>
           
            <div className='card--stats'>
               <span><IoStar color='red' size='15'/></span>
               <span>{props.rating} </span>
               <span>(6) &bull; </span>
               <span> {props.country}</span>
            </div>
            <div className='card--title'>
               <h4>{props.title}</h4>  
               <p>From <b>${props.price}</b> /person</p>
               <p>Time: {props.time}</p>
            </div>
        </div>
    )
}