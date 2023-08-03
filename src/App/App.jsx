
import './App.css'
import * as Components from '../components'
import { QuizContext } from "../Context"
import { useContext,useEffect } from "react"


function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() =>{
    dispatch({type:"REORDER_QUESTION"})
  },[])

  return (
    <div className='App'>
     <h1>Quiz de Programação</h1>
     {quizState.gameSTAGES === "Start" && <Components.Welcome/>}
     {quizState.gameSTAGES === "Playing" && <Components.Questions/>}
     {quizState.gameSTAGES === "End" && <Components.GamerOver/>}
    </div>
  )
}

export default App
