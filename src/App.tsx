import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


function App() {
    console.log('app rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(false)

    const changeRatingValue = (ratingValue: RatingValueType) => {
        setRatingValue(ratingValue)
    }
    const changeAccordionCollapsed = (accordionCollapsed: boolean) => {
        setAccordionCollapsed(!accordionCollapsed)
    }
    const changeOnOff = (on: boolean) => {
      setOn(on)
    }

    return (
        <div className="App">
            <PageTitle title={"Hello, samurai! Let's go!"}/>
            <PageTitle title={"Hello, Friends!"}/>
            <Rating ratingValue={ratingValue} changeRatingValue={changeRatingValue} />
            <OnOff on={on} changeOnOff={changeOnOff} />
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} changeAccordionCollapsed={changeAccordionCollapsed} />
            {/*<Accordion titleValue={"Users"} collapsed={accordionCollapsed} changeAccordionCollapsed={changeAccordionCollapsed} />*/}
            <Rating ratingValue={ratingValue} changeRatingValue={changeRatingValue} />
            <UncontrolledOnOff />
            <UncontrolledAccordion titleValue={"Menu-2"} />
            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    //debugger
    console.log('appTitle rendering')
    return (
        <h1>{ props.title }</h1>
    );
}

export default App;
