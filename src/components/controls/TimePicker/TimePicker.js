import React from "react";
import TimePicker from "rc-time-picker";
import PropTypes from "prop-types";
import "rc-time-picker/assets/index.css";
import "./TimePickerStyles.scss";

const TimePickerView = ({
  error,
  placeholder,
  onChange,
  isrequired,
  disabled,
  label,
  // value,
}) => {
  return (
    <div className="wrapper">
      <span className={`label text-muted`}>
        {label} {isrequired && <span className="text-danger">*</span>}
      </span>
      <TimePicker
        showSecond={false}
        className={`
        xxx
        input
        ${error && !disabled ? "input_error" : ""}
        ${disabled ? "disabled" : ""}
        `}
        onChange={onChange}
        format={"h:mm a"}
        use12Hours
        inputReadOnly
        placeholder={placeholder}
        // value={value}
      />

      <div className={`error`}>{error && !disabled ? error : ""}</div>
    </div>
  );
};

TimePicker.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
};

export default TimePickerView;
