import React from "react";
import {ClockViewType} from "./Clock";


export const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num;
export const DigitalClockView: React.FC<ClockViewType> = ({date}) => {
    return(
        <> <span>{getTwoDigitsString(date.getHours())}:</span>
            <span>{getTwoDigitsString(date.getMinutes())}:</span>
            <span>{getTwoDigitsString(date.getSeconds())}</span> </>
    )

}