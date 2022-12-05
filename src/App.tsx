import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

function App() {
    console.log('app rendering')
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('appTitle rendering')
    return (
        <>Hello, samurai! Let's go!</>
    );
}

function Rating() {
    //debugger
    console.log('rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    //debugger;
    console.log('star rendering')
    return (
        <div>star</div>
    );
}

export default App;
