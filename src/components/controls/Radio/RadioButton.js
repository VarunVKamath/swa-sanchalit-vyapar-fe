import React from "react";
import PropTypes from "prop-types";
import "./RadioButtonStyles.scss";
import { BsFillCircleFill } from "react-icons/bs";

const RadioButton = ({
  onChange,
  className = "",
  text,
  subText,
  error,
  ...props
}) => {
  return (
    <label className={`radio_label className`}>
      <input
        type="radio"
        hidden={true}
        onChange={onChange}
        className="checkbox"
        {...props}
      />

      <div className={`iconWrapper ${error ? "error" : ""}`}>
        <BsFillCircleFill className="icon" />
      </div>

      <div className="textBlock">
        <p className="text text-muted">{text}</p>
        <p className="subText">{subText}</p>
      </div>
    </label>
  );
};

RadioButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  subText: PropTypes.string,
  className: PropTypes.string,
};

export default RadioButton;
