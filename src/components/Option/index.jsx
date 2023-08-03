import "./styles.css"
//import { QuizContext } from "../../Context"
//import { useContext } from "react"

export const Option = ({children}) =>{
    //const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div className="opction">
            {children}
        </div>
    )
}