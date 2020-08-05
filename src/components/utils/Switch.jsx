import React from "react";
import s from "./switch.module.scss";

const Switch = ({handler, isOn, id}) => {
  return (
    <label className={s.switch}>
      <input type="checkbox" onChange={() => handler(id, !isOn)} checked={isOn} />
      <span className={`${s.slider} ${s.round}`} />
    </label>
  );
};

export default Switch;
