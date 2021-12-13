import React from "react";
import {TaskType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

type TaskProps = {
    title: string
    isDone: boolean
}

function Task(props: TaskProps) {
    return (
        <li><input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span></li>
    )
}


function TodoList(props: TodoListPropsType) {
    const taskElements = props.tasks.map(t => <Task title={t.title} isDone={t.isDone}/>)
    return (

        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {taskElements}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>


    )
}

export default TodoList;


