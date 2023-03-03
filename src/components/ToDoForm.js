import { useState } from "react"
import '../css/ToDoForm.css'

const ToDoForm = ({ addTask }) => {

    const [input, setInput] = useState("")

    const handleChange = ({target}) => {
        setInput(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (input !== "") {
            addTask(input)
        }
        setInput("")
    }

    return (
        <div className="ToDoForm">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Enter a task" />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default ToDoForm