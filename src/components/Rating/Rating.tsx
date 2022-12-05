import React from "react";

export function Rating() {
    //debugger
    console.log('rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    //debugger;
    console.log('star rendering')
    return (
        <div>star</div>
    );
}