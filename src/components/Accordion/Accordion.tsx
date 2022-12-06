import React from "react";

function Accordion(props: any) {
    debugger
    console.log('accordion rendering')
    return (
        <div>
            <AccordionTitle titleAcc={props.title}/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle(propsAcc: any) {
    debugger
    console.log('accordionTitle rendering')
    return(
        <h3>{propsAcc.titleAcc}</h3>
    );
}

function AccordionBody() {
    console.log('accordionBody rendering')
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;