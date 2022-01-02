import React from 'react';
type PropsType = {
    on: boolean
    setOn: (on:boolean) => void
}

export function ControlledOnOff(props:PropsType) {


    const OnStyle = {
        width: "250px",
        height: "25px",
        border: "2px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "250px",
        height: "25px",
        border: "2px solid black",
        marginLeft: "2px",
        padding: "2px",
        display: "inline-block",
        backgroundColor: props.on ? "white" : "red"
    }
    const indStyle = {
        height: "15px",
        width: "15px",
        border: "3px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "2px",
        backgroundColor: props.on ? "green" : "red"


    }



    return (
        <div>
            <div style = {OnStyle} onClick={() => {props.setOn(true)}}>On</div>
            <div style = {offStyle} onClick={() => {props.setOn(false)}}>Off</div>
            <div style = {indStyle}></div>
        </div>
    )
}