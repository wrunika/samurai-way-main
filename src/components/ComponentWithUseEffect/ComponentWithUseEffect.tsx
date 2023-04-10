import React, {useEffect, useState} from 'react';

export const ComponentWithUseEffect = () => {

    const [counter, setCounter] = useState(1);
    const [anotherCounter, setAnotherCounter] = useState(1);
    console.log('ComponentWithUseEffect')

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString();
    }, [counter]) //first render end every counter`s changing

    /*useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString();
    }, []) // only first render (componentDidMount)
    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString();
    }) // every render
    */

    return(
        <div>
            <h3>Component with useEffect</h3>
            {counter}
            <button onClick={()=> setCounter(counter + 1)}>+</button>
            {anotherCounter}
            <button onClick={()=> setAnotherCounter(anotherCounter + 1)}>+</button>
        </div>
    )
}