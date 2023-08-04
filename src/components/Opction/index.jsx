import React, { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'


export const Opction = (props) => {

  const [state, dispatch] = useContext(QuizContext)
  console.log(state.correctAnswer)
    
  return (
    <div onClick={() => props.SelectiOpction()}>
        <p><span>{props.position}</span> {props.opction}</p>
    </div>
  )
}
