
import './App.css'
import * as Components from "../Components"
import { useContext } from 'react'
import { QuizContext } from '../Contexts/Quiz/QuizContexts'

function App() {
 
  const [state] = useContext(QuizContext)

 

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
