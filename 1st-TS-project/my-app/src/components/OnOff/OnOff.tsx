import React, {useState} from 'react';
type PropsType = {
    on: boolean
}

export function OnOff() {
const [state, setState] = useState(false)
const setOn = () => setState(true)
const setOff = () => setState(false)

    const OnStyle = {
        width: "250px",
        height: "25px",
        border: "2px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: state ? "green" : "white"
    }
    const offStyle = {
        width: "250px",
        height: "25px",
        border: "2px solid black",
        marginLeft: "2px",
        padding: "2px",
        display: "inline-block",
        backgroundColor: state ? "white" : "red"
    }
    const indStyle = {
        height: "15px",
        width: "15px",
        border: "3px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "2px",
        backgroundColor: state ? "green" : "red"


    }



    return (
        <div>
            <div style = {OnStyle} onClick={setOn}>On</div>
            <div style = {offStyle} onClick={setOff}>Off</div>
            <div style = {indStyle}></div>
        </div>
    )
}