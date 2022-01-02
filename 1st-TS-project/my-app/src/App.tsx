import React, {useState} from 'react';
import './App.css';
import Accordion from '../src/components/Accordion/Accordion'
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {ControlledOnOff} from "./components/ControlledOnOff/ControlledOnOff";

function App() {
    let [collapsed, setCol] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false)
    return (
        <div>

            <ControlledOnOff on={on} setOn={setOn}/>
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating />
            <div>
                <Accordion titleValue={"Menu"}
                           collapsed={collapsed}
                           setCol={() => {setCol(!collapsed)}} />
                <Accordion titleValue={"Users"}
                           collapsed={collapsed}
                           setCol={() => {setCol(!collapsed)}}/>
            </div>
            <b>Article 2</b>
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle Rendered")
    return <h1>{props.title}</h1>
}


export default App;
