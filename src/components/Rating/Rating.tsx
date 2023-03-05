import React from "react";
import {RatingValueType} from "../../App";

type RatingPropsType = {
    ratingValue: RatingValueType
    changeRatingValue: (ratingValue: RatingValueType)=>void
}

export function Rating(props: RatingPropsType) {
    //debugger
    console.log('rating rendering')
    return (
        <div>
            <StarM selected={props.ratingValue > 0} changeRatingValue={ ()=>{props.changeRatingValue(1)} } />
            <StarM selected={props.ratingValue > 1} changeRatingValue={ ()=>{props.changeRatingValue(2)} } />
            <StarM selected={props.ratingValue > 2} changeRatingValue={ ()=>{props.changeRatingValue(3)} } />
            <StarM selected={props.ratingValue > 3} changeRatingValue={ ()=>{props.changeRatingValue(4)} } />
            <StarM selected={props.ratingValue > 4} changeRatingValue={ ()=>{props.changeRatingValue(5)} } />
        </div>
    )
}

export const RatingM = React.memo(Rating);

type StarPropsType = {
    selected: boolean
    changeRatingValue?: ()=>void
}

function Star(props: StarPropsType) {
    //debugger;
    console.log('star rendering')
    return <span onClick={props.changeRatingValue}>{props.selected ? <b>star </b> : 'star '}</span>

    /*if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }*/
}

export const StarM = React.memo(Star)