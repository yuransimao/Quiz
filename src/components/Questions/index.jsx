import "./styles.css"
import { QuizContext } from "../../Context"
import { useContext } from "react"
import {Option} from "../Option"
export const Questions = () =>{
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestions = quizState.questions[quizState.currentQuestion]

    return (
        <div className="Question">
            <p>Perguntas de {quizState.currentQuestion + 1 } á {quizState.questions.length }</p>
            <h2>{currentQuestions.question}</h2>
            <div className="opction-container">
              {currentQuestions.options.map((opct) =>(
                <Option key={opct}>
                    <p>{opct}</p>
                </Option>
              ))}
            </div>

            <button onClick ={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>

        </div>
    )
}