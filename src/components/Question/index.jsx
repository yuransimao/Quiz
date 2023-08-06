
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
  const [Counter, setCounter] = useState(state.Countertime)
  


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
    setCounter( s => s - 1 )
  }

  const RestCounter =() =>{
    setCounter(state.Countertime)
  }
  useEffect(() =>{

    if(Counter === 0){
      setCounter(state.Countertime)
      dispatch({type: Types.SETTIMERENICIAR})
    }
   const Timeout =   setTimeout(counterTime,1000)
    return () =>    clearTimeout(Timeout)
    
  

  },[state.Countertime, Counter, dispatch])


  return (
    <div className={Styles.Wrapper}> 

    <div className={Styles.Questions}> 
    <span className={Styles.Cronometro}>0 : {Counter}</span>
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
      <div className={Styles.Btns}>
        {state.AnswerSelects && <Button handleClick={() => {dispatch({type: Types.NEXT_QUESTION}); RestCounter()}}
        text="Continuar"
        />}
      </div>
    </div>
    </div>
  )
}
