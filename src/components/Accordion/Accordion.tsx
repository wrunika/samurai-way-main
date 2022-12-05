import React from "react";

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

export default Accordion;