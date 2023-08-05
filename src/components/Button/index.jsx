import React from 'react'
import Styles from "./styles.module.css"
export const Button = (props) => {

  return (
    <button className={Styles.Button} onClick={() => props.handleClick()}>{props.text}</button>
  )
}
