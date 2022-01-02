import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCol: () => void
}

function Accordion(props: AccordionPropsType) {
    // let [collapsed, setCol] = useState(true)

    return (
        <>
            <AccordionTitle title={props.titleValue} onClick={props.setCol} />
            {/*<button onClick={() => {setCol(!collapsed)}}>TOGGLE*/}
            {/*</button>*/}
            {!props.collapsed && <AccordionBody/>}
        </>
    )


}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void


}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle Rendered")
    return <h3 onClick={props.onClick}>{props.title}</h3>
}


function AccordionBody() {
    console.log("AccordionBody Rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;