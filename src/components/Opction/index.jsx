import React, { useContext } from 'react'



export const Opction = (props) => {

  
    
  return (
  
  <button disabled={props.disabled} onClick={(e) => props.SelectiOpction(e)} className={props.CustomClass} >
        <span>{props.position}</span><p> {props.opction}</p>
    </button>
  )
}
