import React from "react";

export function Rating() {
    //debugger
    console.log('rating rendering')
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
}

function Star(props: any) {
    //debugger;
    console.log('star rendering')

    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}