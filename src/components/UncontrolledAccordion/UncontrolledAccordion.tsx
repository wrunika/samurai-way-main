import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    //let nameButton = collapsed ? 'show menu' : 'hide menu';
    const changeViewOfMenu = () => {
      setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} changeViewOfMenu={changeViewOfMenu} />
            {/*<button onClick={ ()=>{setCollapsed(!collapsed)} } >{nameButton}</button>*/}
            {collapsed || <AccordionBody /> }
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    changeViewOfMenu: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    //debugger
    //console.log('accordionTitle rendering')
    return(
        <h3 onClick={props.changeViewOfMenu} >{props.title}</h3>
    );
}

function AccordionBody() {
    //console.log('accordionBody rendering')
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;