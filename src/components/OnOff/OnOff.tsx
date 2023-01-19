import React from "react";
import s from './OnOff.module.css'

type OnOffPropsType = {
    turnOn: boolean
}
const OnOff = (props: OnOffPropsType) => {
  return(
      <div className={s.onOffWrapper}>
          {props.turnOn && <>
          <button className={s.buttonGreen}>On</button>
          <button>Off</button>
          <div className={`${s.circle} ${s.buttonGreen}`}></div>
          </>
          }
          {!props.turnOn && <>
              <button>On</button>
              <button className={s.buttonRed}>Off</button>
              <div className={`${s.circle} ${s.buttonRed}`}></div>
          </>
          }
      </div>
  )
}

export default OnOff;