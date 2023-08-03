import "./styles.css"
import { QuizContext } from "../../Context"
import { useContext } from "react"
import welldone from "../../img/welldone.svg"

export const GamerOver = () =>{
    const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div className="gamerOver">
            <h1>Fim de Jogo</h1>
            <p>Pontuação</p>
            <p>Pontuação y de z perguntas</p>
            <img src={welldone} alt="welldone"/>
            <button>Reniciar</button>
        </div>
    )
}