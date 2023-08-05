import React, { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import { Button } from '../Button'

export  function Fim() {
    const [state, dispatch] = useContext(QuizContext)
  return (
    <div>
    <h1>FIM</h1>
    <p>Sua pontuaçao</p>
    <Button text="Reniciar"/>
    </div>
  )
}
