import React from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";

const task: Array<TaskType> = [
    {id: 1, isDone: true, title: "HTML&CSS"},
    {id: 2, isDone: true, title: "JS"},
    {id: 3, isDone: false, title: "React"}
]
const task2: Array<TaskType> = [
    {id: 4, isDone: true, title: "Vodka"},
    {id: 5, isDone: false, title: "Shmall"},
    {id: 6, isDone: true, title: "Condoms"}
]

function App() {
    return (
        <div className="App">
            <ToDoList title="What to learn" tasks={task}/>
            <ToDoList title="What to buy" tasks={task2}/>
            {/*<ToDoList title="What to DO"/>*/}
        </div>
    );
}

export default App;
