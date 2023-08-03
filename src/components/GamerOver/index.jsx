import "./styles.css"
import { QuizContext } from "../../Context"
import { useContext } from "react"
import welldone from "../../img/welldone.svg"

export const GamerOver = () =>{
    const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div className="gamerOver">
            <h1>Fim de Jogo</h1>
            <p>Pontuação {quizState.score}</p>
            <p>Você acertou {quizState.score}  á  {quizState.questions.length} perguntas.</p>
            <img src={welldone} alt="welldone"/>
            <button onClick ={() => dispatch({type:"RENICIAR"})}>Reniciar</button>
        </div>
    )
}