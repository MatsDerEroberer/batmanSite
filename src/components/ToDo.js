import { useState } from "react"
import '../css/ToDo.css'
import ToDoList from "./ToDoList"
import ToDoForm from "./ToDoForm" 


const ToDo = () => {

    const data = [{
        "id": 1,
        "task": "Give dog a bath",
        "complete": true
      }, {
        "id": 2,
        "task": "Do laundry",
        "complete": true
      }, {
        "id": 3,
        "task": "Vacuum floor",
        "complete": false
      }]

    const [toDoList, setToDoList] = useState(data)

    const addTask = (input) => {
        let tasks = [...toDoList, {id: toDoList.length + 1, task: input, complete: false}]
        setToDoList(tasks)
    }

    const removeTask = (input) => {
        let tasks = toDoList.filter(task => task.id !== input)
        setToDoList(tasks)
    }

    return (
        <div className="ToDo">
            <h2>ToDo-List</h2>
            <ToDoForm addTask={addTask} />
            <ToDoList items={toDoList} removeTask={removeTask} />
        </div>
    )
}

export default ToDo