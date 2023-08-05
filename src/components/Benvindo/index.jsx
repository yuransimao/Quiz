import Styles from "./styles.module.css"
import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import { Button } from '../Button'
import * as Type from '../../context/Type'
import quizshow from "../../img/quizshow-rafiki.svg"

export const Benvindo = () => {
  const [state, dispatch] = useContext(QuizContext)
  
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Benvindo}>
        <h1>Welcome ao <span>Quiz Show</span></h1>
      
      
        <img src={quizshow} alt="quizshow" />
        <p>Vamos jogar ? </p>
        <Button handleClick={() => dispatch({type: Type.CHANGE_STAGES})}
        text="Iniciar a jogar"
        />
      </div>
    </div>

  )
  }