import React, { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import Styles from "./styles.module.css"

export const Opction = (props) => {

  const [state, dispatch] = useContext(QuizContext)
  
  const correctAnswer = props.answer === props.opction
  const wrongAnswer = props.answer !== props.opction

  console.log((state.AnswerSelects && correctAnswer ? Styles["correct"] : Styles["Opction"]) == true)
    
  return (
  
  <div onClick={() => props.SelectiOpction()} className={`${Styles["Opction"]} ${state.AnswerSelects && props.answer === props.opction ? Styles["correct"] : ""}   `}>
        <span>{props.position}</span><p> {props.opction}</p>
    </div>
  )
}
