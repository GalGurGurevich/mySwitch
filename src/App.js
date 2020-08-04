import React, {useState} from "react";
import "./styles.css";

export default function Switch() {

  const [value, setValue] = useState(false);

  return (
    <>
    <div className={'mySwitch' + (value ? ' open' : '')} onClick={e => setValue(!value)}>
      <div className={'circle' + (value ? ' open' : '')} onClick={e => setValue(!value)} value={value}></div>
      <div className={'icon' + (value ? ' open' : '')}></div>
    </div>
    <br></br>
    <div>Is Turned off? {value.toString()}</div>
    </>
  );
}
