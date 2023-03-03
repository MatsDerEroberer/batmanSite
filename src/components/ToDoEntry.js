import '../css/ToDoEntry.css'

const ToDoEntry = (props) => {

    const handleRemove = () => {
        props.removeTask(props.id)
    }

    return (
        <div key={props.id} className="ToDoEntry">         
            <p>{props.task}</p>
            <button onClick={handleRemove}>X</button>
        </div>
    )
}

export default ToDoEntry