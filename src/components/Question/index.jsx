
import Styles from "./styles.module.css"
import { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import { Opction } from '../Opction'
import { Button } from "../Button"
import * as Types  from '../../context/Type'

export const Questions = () => {
  
  const [state, dispatch] = useContext(QuizContext)
  const currentQuestions = state.questions[state.CurrentQuestion]
  const [opctionSelct, setOpctionSelect] = useState(null)
  const [isdisabled, setIsdisabled] = useState(null)
  const [Counter, setCounter] = useState(0)


  const onSelectiOpction = (opction) => {

    setIsdisabled(true)
    
    setOpctionSelect(opction)
    dispatch({
      type: Types.CORRECT_QUESTION, 
      payload:{
      answer:currentQuestions.answer,
      opction,
      
    }})

   
    
    
  }

  const counterTime = () =>{
    setCounter( s => s + 1 )

    if(Counter === 30){
      setCounter(0)
    }
  }
  useEffect(() =>{


   const Timeout =   setTimeout(counterTime,300)

    return () =>    clearTimeout(Timeout)
    
  

  },[Counter])

  console.log(state.Isdisabledopction)
  return (
    <div className={Styles.Questions}> 
    <span>0 : {Counter}</span>
      <div className={Styles.Questions_text}>
        <h1>{currentQuestions.question}</h1>
        <div className={Styles.circle}>
          <p> {state.CurrentQuestion + 1} / {state.questions.length}</p>
        </div>
      </div>

      {currentQuestions.options.map((opction,index)=>(

        <Opction opction={opction} key={opction}
        position={index + 1}
        answer={currentQuestions.answer}
        SelectiOpction = {() => onSelectiOpction(opction)}

        disabled={state.AnswerSelects ? isdisabled : false }

        CustomClass= {
          ` ${Styles["Opction"]} ${state.AnswerSelects && opctionSelct === opction ? currentQuestions.answer === opction  ? Styles["correct"] : Styles["wrong"] : ""}   `
        }
        />

      ))}
      {state.AnswerSelects && <Button handleClick={() => dispatch({type: Types.NEXT_QUESTION})}
      text="Continuar"
      />}
    </div>
  )
}
