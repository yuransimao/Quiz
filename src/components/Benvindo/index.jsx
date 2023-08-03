import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'
import * as Type from '../../context/Type'
export const Benvindo = () => {
  const [state, dispatch] = useContext(QuizContext)
  
  return (
    <div>
      <h1>Welcome ao Quiz <span>Club do Genios</span></h1>
      <p>Começa a jogar</p>
      <button onClick={() => dispatch({type: Type.CHANGE_STAGES})}>Iniciar</button>
    </div>

  )
  }