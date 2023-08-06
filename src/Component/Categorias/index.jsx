import  { useContext } from 'react'
import { QuizContext } from '../../Contexts/Quiz/QuizContexts'
import { Button } from '../Button'
import Category from "../../img/Choose-rafiki.svg"
import * as Type from '../../Contexts/Type'
import Styles from "./styles.module.css"

export const Categorias = () => {
    const [state, dispatch] = useContext(QuizContext)

    const HandleCategory = (category) =>{
       dispatch({type : Type.START_GAME, payload: category})
       dispatch({type : Type.ALitorioQuestion})
        
    }  
    return (
   <div className={Styles.Wrapper}>
   <div  className={Styles.category}>
        <h1>Selecione uma  <span>Categoria</span></h1>
        <p>Escolhe uma categorias que maisgostas</p>
       <div className={Styles.container_category}>{state.questions.map((questions)=>(
             <Button handleClick={() => HandleCategory(questions.category)} key={questions.category}
             
             text ={questions. category}
             />
       ))}
       </div>
       <img src={Category} alt="Category" />
    </div>
    </div>
  )
}
