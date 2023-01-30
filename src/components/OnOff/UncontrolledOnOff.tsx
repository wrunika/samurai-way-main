import React, {useState} from "react";
import s from './OnOff.module.css'

const UncontrolledOnOff = () => {
    const [on, setOn] = useState<boolean>(false);
    const onStyle = {
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        backgroundColor: !on ? "red" : "white",
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        border: "solid 1px black",
        borderRadius: "50%",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }
  return(
      <div className={s.onOffWrapper}>
          <button onClick={ ()=>{setOn(true)} } style={onStyle} >On</button>
          <button onClick={ ()=>{setOn(false)} } style={offStyle} >Off</button>
          <div style={indicatorStyle} ></div>
          {/*{turnOn && <>
          <button className={s.buttonGreen}>On</button>
          <button>Off</button>
          <div className={`${s.circle} ${s.buttonGreen}`}></div>
          </>
          }
          {!turnOn && <>
              <button>On</button>
              <button className={s.buttonRed}>Off</button>
              <div className={`${s.circle} ${s.buttonRed}`}></div>
          </>
          }*/}
      </div>
  )
}

export default UncontrolledOnOff;