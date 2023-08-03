import "./styles.css"
import Quiz from "../../img/quiz.svg"
import { QuizContext } from "../../Context"
import { useContext } from "react"
export const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    
  return (
    <div id="Welcome">
        <h1>Seja Bem vindo</h1>
        <p>Click no botão abaixo :</p>
        <button onClick={() => dispatch({type:"CHANGE_STAGES"})}>Iniciar</button>
        <img src={Quiz} alt="quiz" />
    </div>
  )
}
