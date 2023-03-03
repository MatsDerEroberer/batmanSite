import '../../css/Answer.css';

const Answers = ({ answers, answerQuestion }) => {

    const handleAnswer = ({target}) => {
        answerQuestion(target.innerHTML)
    }

    return (
        <div className="answer-container">
           {answers.map(answer => {
                return (
                    <button onClick={handleAnswer} key={answer}>{answer}</button>
                )
           })}
        </div>
    )
}

export default Answers