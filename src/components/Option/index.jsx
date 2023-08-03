import "./styles.css"
import { QuizContext } from "../../Context"
import { useContext } from "react"

export const Option = (props) =>{
    const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div className={`opction ${quizState.answerSelect && props.answer === props.opction ? "correct" : ""} ${quizState.answerSelect && props.answer !== props.opction ? "wrong" : ""}`} onClick ={() => props.Selectopction()}>
            <p>{props.opction}</p>
        </div>
    )
}