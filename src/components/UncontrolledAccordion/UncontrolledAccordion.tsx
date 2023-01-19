import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    //debugger
    //console.log('accordion rendering')
    const [collapsed, setCollapsed] = useState<boolean>(true)
    let nameButton = collapsed ? 'show menu' : 'hide menu';

    return (
        <div>
            <AccordionTitle title={props.titleValue} /> <button onClick={ ()=>{setCollapsed(!collapsed)} } >{nameButton}</button>
            {collapsed || <AccordionBody /> }
        </div>
    )
    /*if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        );
    }*/
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    //debugger
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

export default UncontrolledAccordion;