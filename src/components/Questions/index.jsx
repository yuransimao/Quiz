import "./styles.css"
import { QuizContext } from "../../Context"
import { useContext } from "react"

export const Questions = () =>{
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestions = quizState.questions[quizState.currentQuestion]

    return (
        <div className="Question">
            <p>Perguntas de {quizState.currentQuestion + 1 } á {quizState.questions.length }</p>
            <h2>{currentQuestions.question}</h2>
            <div className="questios-container">
                <p>Opções </p>
            </div>

            <button onClick ={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>

        </div>
    )
}