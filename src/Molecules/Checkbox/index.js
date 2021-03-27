import React from "react";

const CheckBox = (props) => {
  return (
    <div className="form-check" key={props.id}>
      <input
        className={props.isCheck ? "form-check-input checkbox-check" : "form-check-input"}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        type="checkbox"
        checked={props.checked}
        value={props.value}
        disabled={props.disable}
      />
      <label className="form-check-label check-txt">{props.value}</label>
    </div>
  );
};

export default CheckBox;
