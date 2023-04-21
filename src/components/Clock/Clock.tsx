import React, {useEffect, useState} from 'react';


const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num;
export const Clock = () => {

    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        const timeId = setInterval(()=>{
            console.log('TICK')
            setDate(new Date())
        }, 1000);
            return ()=> {
                clearInterval(timeId)
            }
    }, [])

    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}:</span>
            <span>{getTwoDigitsString(date.getMinutes())}:</span>
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    );
};
