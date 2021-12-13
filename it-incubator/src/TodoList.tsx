import React from "react";
import {FiltersValueType, TaskType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id:number)=>void
    filter: FiltersValueType
    changeFilter: (filter:FiltersValueType) => void
}

// function Task(tasks: TaskProps) {
//     return (
//         <li><input type="checkbox" checked={props.isDone}/>
//             <span>{props.title}</span></li>
//     )
// }
// const taskElements =  props.tasks.map(Task)

function TodoList(props: TodoListPropsType) {
    const taskElements = props.tasks.map(t => <li key={t.id}><input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={() => {props.removeTask(t.id)}}>x</button></li>)
    return (

        <div>
            <h3>{props.title}</h3>
            <div>
                <input placeholder={"Введите задание здесь"}/>
                <button>+</button>
            </div>
            <ul>
                {taskElements}
            </ul>
            <div>
                <button onClick={() => props.changeFilter("all") }>All</button>
                <button onClick={() => props.changeFilter("active") }>Active</button>
                <button onClick={() => props.changeFilter("completed") }>Completed</button>
            </div>
        </div>


    )
}

export default TodoList;


