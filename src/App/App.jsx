
import './App.css'
import * as Components from '../components'
import { QuizContext } from "../Context"
import { useContext } from "react"
function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className='App'>
     <h1>Quiz de Programação</h1>
     {quizState.gameSTAGES === "Start" && <Components.Welcome/>}
     {quizState.gameSTAGES === "Playing" && <Components.Questions/>}
    </div>
  )
}

export default App
