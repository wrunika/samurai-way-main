import React, {useEffect, useState} from 'react';

export const ComponentWithUseEffect = () => {

    const [counter, setCounter] = useState(1);
    const [anotherCounter, setAnotherCounter] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    //console.log('ComponentWithUseEffect')

    /*useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString();
    }, [counter]) //first render end every counter`s changing*/

    /*useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString();
    }, []) // only first render (componentDidMount)
    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString();
    }) // every render
    */

    /*useEffect(() => {
        setTimeout(() => {
            console.log('setT')
            document.title = counter.toString();
        }, 2000)
    }, [counter])*/
    useEffect(() => {
        setInterval(() => {
            //console.log('setI ' + seconds)
            setSeconds(sec => sec + 1);
            //setSeconds(seconds+ 1);
        }, 1000)
    }, [])
    useEffect(() => {
        setInterval(() => {
            //console.log('setI ' + seconds)
            setTime( new Date().toLocaleTimeString());
            //setSeconds(seconds+ 1);
        }, 1000)
    }, [])


    return(
        <div>
            <h3>Component with useEffect</h3>
            {counter}
            <button onClick={()=> setCounter(counter + 1)}>+</button>
            {anotherCounter}
            <button onClick={()=> setAnotherCounter(anotherCounter + 1)}>+</button>
            <p>timer - {seconds}</p>
            <p>{time}</p>
        </div>
    )
}