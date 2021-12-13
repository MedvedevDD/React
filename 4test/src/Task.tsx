import React from "react";

type taskProps = {
    id: number
    isDone: boolean
    title: string
}

export function Task(props: taskProps) {
    return (
        <li><input type="checkbox" checked={props.isDone}/> <span>{props.title}</span></li>
    )
}
