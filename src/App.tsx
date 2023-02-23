import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {ControlledInput} from "./components/ControlledInput/ControlledInput";
import {ControlledCheckbox} from "./components/ControlledInput/ControlledCheckbox";
import {ControlledSelect} from "./components/ControlledInput/ControlledSelect";
import {Select} from "./components/Select/Select";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


function App() {
    //console.log('app rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [parentInputValue, setParentInputValue] = useState('');
    const [parentCheckboxValue, setParentCheckboxValue] = useState(false);
    const [parentSelectValue, setParentSelectValue] = useState<string | undefined>(undefined);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(false)
    const [selectValue, setSelectValue] = useState('1')


    const selectItems =[{title: 'spring', value: '1'}, {title: 'March', value: '2'}, {title: 'April', value: '3'}, {title: 'May', value: '4'}]
    const users = [{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Viktor', value: 2}];
    const menu = [{title: 'main', value: 1}, {title: 'settings', value: 2}, {title: 'contacts', value: 3}];
    const changeRatingValue = (ratingValue: RatingValueType) => {
        setRatingValue(ratingValue)
    }
    const changeAccordionCollapsed = (accordionCollapsed: boolean) => {
        setAccordionCollapsed(!accordionCollapsed)
    }
    const onClickCallBack = (v: any) => {
        console.log(v)
    }
    const changeOnOff = (on: boolean) => {
      setOn(on)
    }

    const onClickSelect = (value: any) => {
        console.log('pressed' + value)
        setSelectValue(value)
    }

    return (
        <div className="App">
            <PageTitle title={"Hello, samurai! Let's go!"}/>
            <PageTitle title={"Hello, Friends!"}/>
            <Rating ratingValue={ratingValue} changeRatingValue={changeRatingValue} />
            <OnOff on={on} changeOnOff={changeOnOff} />
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} items={menu} onClickCallBack={onClickCallBack} changeAccordionCollapsed={changeAccordionCollapsed} />
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} items={users} onClickCallBack={onClickCallBack} changeAccordionCollapsed={changeAccordionCollapsed} />
            <Rating ratingValue={ratingValue} changeRatingValue={changeRatingValue} />
            <UncontrolledOnOff />
            <UncontrolledAccordion titleValue={"Menu-2"} />
            <UncontrolledRating />
            <UncontrolledInput />
            <Select value={selectValue} items={selectItems} onClickSelect={onClickSelect} />
            <ControlledInput parentInputValue={parentInputValue} setParentInputValue={setParentInputValue} />
            <ControlledCheckbox parentCheckboxValue={parentCheckboxValue} setParentCheckboxValue={setParentCheckboxValue} />
            <ControlledSelect parentSelectValue={parentSelectValue} setParentSelectValue={setParentSelectValue} />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    //debugger
    //console.log('appTitle rendering')
    return (
        <h1>{ props.title }</h1>
    );
}

export default App;
