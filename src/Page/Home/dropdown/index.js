import React, { useState } from "react";
import Checkbox from "../../../Molecules/Checkbox";
import "./index.css";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkbox, setCheckbox] = useState([]);
  const [textField, setTextField] = useState([]);

  const { data, id, name, labelText } = props;

  const handleCheckbox = (e, id) => {
    const { value } = e.target;
    let array = [...checkbox, { check: value }];
    let isPresent = checkbox.find((i) => i.check == id);
    if (isPresent) array = checkbox.filter((e) => e.check != id);
    setCheckbox(array);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    handleChangedData({ [name]: value, id });
  };

  const handleChangedData = (data) => {
    let array = [...textField] || [];
    let index = -1;
    index = array?.length ? array.findIndex((i) => i.id === data.id) : -1;
    if (index >= 0) array[index] = { ...data };
    else array = [...textField, data];
    setTextField(array);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    let finalArray = textField.map((item, i) => Object.assign({}, item, checkbox[i]));
    finalArray = finalArray.filter((i) => i.check);
    props.submitData(finalArray);
    setTextField([]);
    setCheckbox([]);
    setIsOpen(false);
  };

  return (
    <>
      <div className="select-head multiselect">
        <label>{labelText ? labelText : null}</label>

        <div className="selectBox" onClick={() => setIsOpen(!isOpen)}>
          <select id={id} className="select-field" name={name}>
            {textField?.length || checkbox?.length ? (
              <option className="option-select">{`${checkbox?.length ? checkbox[checkbox?.length - 1].check : ""}${textField?.length ? `(${textField?.[textField?.length - 1]?.text})` : ""}`}</option>
            ) : (
              <option className="option-select">Select an option</option>
            )}
          </select>
          <div className="overSelect"></div>
        </div>

        <div id="checkBoxes" className={isOpen ? "d-block" : "d-none"}>
          {data?.map((item) => {
            let textObj = textField?.find((i) => i.id === item.id);
            let isChecked = checkbox.find((i) => i.check == item.checkId);
            return (
              <div className="d-flex justify-content-between p-2" key={item.id}>
                <label>
                  <Checkbox checked={isChecked || ""} name="checkId" onChange={(e) => handleCheckbox(e, item.id)} value={item.checkId} id={item.id} isCheck />
                  {item.checkName}
                </label>
                <input className="float-right" type="text" id={item.id} name="text" value={textObj ? textObj.text : ""} onChange={(e) => handleChange(e, item.id)} disabled={!isChecked} />
              </div>
            );
          })}
        </div>
      </div>

      <button className="save-btn" onClick={(e) => onsubmit(e)}>
        Save
      </button>
    </>
  );
};

export default Dropdown;
