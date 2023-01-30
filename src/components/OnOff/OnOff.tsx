import React from "react";
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
    changeOnOff: (on: boolean)=>void
}
const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        backgroundColor: props.on ? "green" : "white",
    }
    const offStyle = {
        backgroundColor: !props.on ? "red" : "white",
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        border: "solid 1px black",
        borderRadius: "50%",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red",
    }
  return(
      <div className={s.onOffWrapper}>
          <button onClick={ ()=>{props.changeOnOff(true)} } style={onStyle} >On</button>
          <button onClick={ ()=>{props.changeOnOff(false)} } style={offStyle} >Off</button>
          <div style={indicatorStyle} ></div>
      </div>
  )
}

export default OnOff;