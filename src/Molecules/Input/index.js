import React from "react";
import "./input.css";
import * as validation from "../Validation";

const Input = (props) => {
  const { disabled = false, type = "text", value, className, placeholder, onChange, name, isSubmitted, maxLength = 40, autoComplete = "off", id = "" } = props;

  return (
    <div className="form-group">
      <div className="col-12 d-flex">
        <div className="icon-textfield"></div>
        <input
          type={type}
          name={name}
          maxLength={maxLength}
          className={className}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          id={id}
        />
      </div>
      <div className="error-field">
        {value.length === maxLength && <div className="error-message ml-3">*{"Maximum limit exceed"}</div>}
        {isSubmitted && <div className={"error-message"}>{validation.REQUIRED(value, placeholder) || ""}</div>}
        {isSubmitted && type === "email" && value && <div className={"error-message"}>{validation.EMAIL(value, placeholder) || ""}</div>}
        {isSubmitted && type === "password" && value && <div className={"error-message"}>{validation.PASSWORD(value, placeholder) || ""}</div>}
      </div>
    </div>
  );
};
export default Input;
