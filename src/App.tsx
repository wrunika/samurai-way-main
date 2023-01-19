import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    console.log('app rendering')
    return (
        <div className="App">
            <PageTitle title={"Hello, samurai! Let's go!"}/>
            <PageTitle title={"Hello, Friends!"}/>
            <Rating value={2}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    //debugger
    console.log('appTitle rendering')
    return (
        <h1>{ props.title }</h1>
    );
}

export default App;
