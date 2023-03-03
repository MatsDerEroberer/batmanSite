import { useEffect, useState } from "react"
import '../../css/Quiz.css';
import Answers from "./Answers";

const Quiz = () => {
    
    function decodeHTMLEntities(rawStr) {
        return rawStr.replace(/&#(\d+);/g, ((match, dec) => `${String.fromCharCode(dec)}`));
      }

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [won, setWon] = useState(false)
    const [items, setItems] = useState([])
    const [rightAnswers, setRightAnswers] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const answerQuestion = (input) => {

        if (currentQuestion >= 4) {
            setWon(true)
            if (input === items.results[currentQuestion].correct_answer) {
                setRightAnswers(rightAnswers + 1)
            }
        } else {
            if (input === items.results[currentQuestion].correct_answer) {
                setRightAnswers(rightAnswers + 1)
                setCurrentQuestion(currentQuestion + 1)
            } else {
                setCurrentQuestion(currentQuestion + 1)
            }
        }
    }

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true) 
                setItems(result) //TODO: shuffle the answers!
            },
            (error) => {
                setIsLoaded(false)
                setError(error)
            }
        )
    },[])
    
    if (error) {
        return <div className="quiz-container">Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div className="quiz-container">Loading...</div>
    } else if (won) {
        return (
            <div className="quiz-container">
                <h2>Quiz</h2>
                <p>Your amount of correct answered questions: {rightAnswers}/5</p>
                <button onClick={() => window.location.reload(false)}>Try again</button>
            </div>
        ) 
    } else {
        return (
            <div className="quiz-container">
                <h3>Quiz: {console.log(items)}</h3>
                <p>Current Question: {currentQuestion + 1}/5 | Correct answers: {rightAnswers}</p>
                <p>Category: {items.results[currentQuestion].category}</p>
                <p className="question">{decodeHTMLEntities(items.results[currentQuestion].question)}</p>
                <Answers 
                    answers={[
                        ...items.results[currentQuestion].incorrect_answers, 
                        items.results[currentQuestion].correct_answer]} 
                        answerQuestion={answerQuestion}
                />
            </div>
        )
    }
    
}

export default Quiz