
import './App.css'
import * as Components from "../Components"
import { useContext } from 'react'
import { QuizContext } from '../context/QuizContexts'

function App() {
 
  const [state, dispatch] = useContext(QuizContext)

 

  return (
    <div className='App'>
     
     {state.GameStages === "Start" && <Components.Benvindo/>}
     {state.GameStages === "Category" && <Components.Categorias/>}
     {state.GameStages === "Playing" && <Components.Questions/>}
     {state.GameStages === "End" && <Components.Fim/>}
    </div>
  )
}

export default App
