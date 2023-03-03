import ToDoEntry from "./ToDoEntry"
import '../css/ToDoList.css'

const ToDoList = (props) => {
    
    return (
        <div className="ToDoList">
                {props.items.map(item => {
                    return (
                       <ToDoEntry id={item.id} task={item.task} removeTask={props.removeTask} />
                    )
                })}
        </div>
    )
}

export default ToDoList