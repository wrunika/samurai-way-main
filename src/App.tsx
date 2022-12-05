import React from 'react';
import './App.css';

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

function Accordion() {
    console.log('accordion rendering')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle() {
    console.log('accordionTitle rendering')
    return(
        <h3>Меню</h3>
    );
}

function AccordionBody() {
    console.log('accordionBody rendering')
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>2</li>
        </ul>
    );
}

export default App;
