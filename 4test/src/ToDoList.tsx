import React from "react";
import {Task} from "./Task";

export type TaskType = {
    id: number,
    isDone: boolean,
    title: string
}

type ToDoListPropsType = {
    title: string,
    tasks: Array<TaskType>
}

function ToDoList(props: ToDoListPropsType) {
    let tasksList = props.tasks.map(t => <Task id={t.id} isDone={t.isDone} title={t.title}/>)
    return (

        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>

    )
}

export default ToDoList;
