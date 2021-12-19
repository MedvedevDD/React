import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FiltersValueType = "all" | "active" | "completed"

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false},
        {id: 4, title: "Versyka", isDone: false},
        {id: 5, title: "Raznoe", isDone: false},
    ])

    const [filter, setFilter] = useState<FiltersValueType>("all")

    const todoListTitle: string = "What to learn";

// const tasks = state[0];
// const setTasks = state[1];
    // let tasks: Array<TaskType> =


const changeFilter = (filter: FiltersValueType) => {setFilter(filter)}

    const removeTask = (id: number) => {
        // const filteredTasks : Array<TaskType> = tasks.filter(t => t.id !== id)
        setTasks(tasks.filter(t => t.id !== id))
    }

    let tasksForRender = tasks;
    if (filter === "active") {
        tasksForRender = tasks.filter(t=>t.isDone === false)
    }
    if (filter === "completed") {
        tasksForRender = tasks.filter(t=>t.isDone === true)
    }
    // setFilter

    return (
        <div className="App">
            <TodoList title={todoListTitle}
                      tasks={tasksForRender}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      // filter={filter}

            />
        </div>
    );
}

export default App;

