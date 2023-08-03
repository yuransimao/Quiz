import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import { QuizProvide } from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvide>
    <App />
    </QuizProvide>
  </React.StrictMode>,
)
