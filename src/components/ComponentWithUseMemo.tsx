import React, {ChangeEvent, useMemo, useState} from 'react';

export const ComponentWithUseMemo = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    const onChangeSetA = (e: ChangeEvent<HTMLInputElement>) => {
      setA(+e.currentTarget.value)
    }
    const onChangeSetB = (e: ChangeEvent<HTMLInputElement>) => {
      setB(+e.currentTarget.value)
    }

    let resultA = 1;
    let resultB = 1;
    useMemo(()=>{
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const hej = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a])
    //useMemo делает вычисления (в функции) и запоминает их, до тех пор пока а (в зависимостях) не поменяется
    //если а поменяется, делает вычисления еще раз
    //в противном случае возвращает то, что запомнил (не делая пересчет)

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <div>
            <h4>Component with useMemo</h4>
            <input value={a} onChange={onChangeSetA}/>
            <input value={b} onChange={onChangeSetB}/>
            <div>Result for A: {resultA}</div>
            <div>Result for B: {resultB}</div>
        </div>
    );
};

export default ComponentWithUseMemo;