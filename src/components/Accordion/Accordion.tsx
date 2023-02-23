import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeAccordionCollapsed: (accordionCollapsed: boolean)=>void
    items: ItemType[]
    onClickCallBack: (value: any)=> void
}

function Accordion(props: AccordionPropsType) {
    //debugger
    //console.log('accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} changeAccordionCollapsed={ ()=> {props.changeAccordionCollapsed(props.collapsed)} } />
            {props.collapsed || <AccordionBody items={props.items} onClickCallBack={props.onClickCallBack} /> }
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    changeAccordionCollapsed: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    //debugger
    //console.log('accordionTitle rendering')
    return(
        <h3 onClick={props.changeAccordionCollapsed}>{props.title}</h3>
    );
}

type ItemType = {
    title: string
    value: any
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClickCallBack: (value: any)=> void
}
function AccordionBody(props: AccordionBodyPropsType) {
    //console.log('accordionBody rendering')
    return(
        <ul>
            {props.items.map((el, index) => {
                return(
                    <li key={index} onClick={()=> {props.onClickCallBack(el.value)} } >{el.title}</li>
                )
            })}
            {/*<li>1</li>
            <li>2</li>
            <li>3</li>*/}
        </ul>
    );
}

export default Accordion;