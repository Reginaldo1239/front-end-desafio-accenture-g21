import React from 'react';
import Style from './style.module.css';
export default function Button (props){

    let {number,letters} = props;

   const  handlerClick=()=>{
        props.onClick()
    }
    return (
        <div className={Style.phone_button}>
                <button  className={Style.button}  onClick={(event)=>{handlerClick(event)}} >
                    <div>{number}</div>
                    <div className={Style.letter}>{letters}</div>
                    </button>
         </div>
    ) 
}