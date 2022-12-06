import React from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {
    debugger
    console.log('accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log('accordionTitle rendering')
    return(
        <h3>{props.title}</h3>
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