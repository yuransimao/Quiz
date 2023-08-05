import React, { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import { Button } from '../Button'
import * as Types from '../../context/Type'
import Styles from "./styles.module.css"
import Bye from "../../img/Bye.svg"

export  function Fim() {
    const [state, dispatch] = useContext(QuizContext)
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles["Fim"]}>
      <h1>FIM DO <span>JOGO</span></h1>
      <p>Você a certo {state.correctAnswer} das {state.questions.length} questões</p>
      <img src={Bye} alt="Bye" />
      <Button text="Reniciar"
      handleClick={() => dispatch({type: Types.RECOMECAR})}
      />
      </div>
    </div>
  )
}
