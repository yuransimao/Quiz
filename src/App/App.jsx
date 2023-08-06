
import './App.css'
import  {Benvindo, Categorias, Fim, Questions,}from "../Components"
import { useContext } from 'react'
import { QuizContext } from '../Contexts/Quiz/QuizContexts'

function App() {
 
  const [state] = useContext(QuizContext)

 

  return (
    <div className='App'>
     
     {state.GameStages === "Start" && <Benvindo/>}
     {state.GameStages === "Category" && <Categorias/>}
     {state.GameStages === "Playing" && <Questions/>}
     {state.GameStages === "End" && <Fim/>}

    </div>
  )
}

export default App
