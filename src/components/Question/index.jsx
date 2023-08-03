import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContexts'

export const Questions = () => {

  const [state, dispatch] = useContext(QuizContext)
 

  return (
    <div> 
      <h1>Quenstions</h1></div>
  )
}
