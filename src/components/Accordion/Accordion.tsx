import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeAccordionCollapsed: (accordionCollapsed: boolean)=>void
}

function Accordion(props: AccordionPropsType) {
    //debugger
    //console.log('accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} changeAccordionCollapsed={ ()=> {props.changeAccordionCollapsed(props.collapsed)} } />
            {props.collapsed || <AccordionBody /> }
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    changeAccordionCollapsed: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    //debugger
    console.log('accordionTitle rendering')
    return(
        <h3 onClick={props.changeAccordionCollapsed}>{props.title}</h3>
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