import Quiz from "../../img/quiz.svg"
export const Welcome = () => {
  return (
    <div>
        <h1>Seja Bem vindo</h1>
        <p>Click no botão abaixo :</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="quiz" />
    </div>
  )
}
