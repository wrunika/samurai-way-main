import React, {useMemo, useState} from 'react';

export const CuteUseState = () => {
  const generateData = () => {
    console.log('generateData')
    //difficult counting
    return 11;
  }
  //const initValue = useMemo(()=>generateData(), []);
  //const initValue = useMemo(generateData, []);
  const [counter, setCounter] = useState(generateData);
  const changer = (state: number) => {
    return state + 1;
  }
  return(
      <div>
        <h3>Cute useState</h3>
        {counter}
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={()=> setCounter(changer)}>+</button>
        {counter}
        <button onClick={()=> setCounter(state => state + 1)}>+</button>
      </div>
  )
}