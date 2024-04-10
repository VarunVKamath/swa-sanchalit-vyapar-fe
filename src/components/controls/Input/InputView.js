import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./InputStyles.scss";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const inputRef = React.createRef();

const Input = ({
  error,
  tabIndex = 0,
  type,
  className = "",
  label,
  disabled,
  size = "",
  setFocus = 0,
  isrequired = false,
  isvalnum = "",
  min = "",
  ...props
}) => {
  useEffect(() => {
    if (setFocus) {
      inputRef.current.focus();
    }
  }, [setFocus]);

  let [newType, setNewType] = useState(type === "password" ? "password" : type);

  const changeType = () => {
    if (newType === "password") {
      setNewType("text");
    } else {
      setNewType("password");
    }
  };

  const handleKeyPress = (e) => {
    if (isvalnum === "isNum") {
      let charCode = e.which ? e.which : e.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
      }
    }
    if (isvalnum === "alphanumeric") {
      // var , i, len;
      let code = e.which ? e.which : e.keyCode;
      // for (i = 0, len = str.length; i < len; i++) {
      //   code = str.charCodeAt(i);
      // }
      if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)
      ) {
        // lower alpha (a-z)
        e.preventDefault();
      }
    }
  };

  return (
    <div className="wrapper">
      <span className={`label text-muted`}>
        {label} {isrequired && <span className="text-danger">*</span>}
      </span>
      <input
        ref={inputRef}
        type={newType}
        tabIndex={tabIndex}
        disabled={disabled}
        onKeyPress={handleKeyPress}
        min={min}
        className={`
          input
          ${error && !disabled ? "input_error" : ""}
          ${disabled ? "disabled" : ""}
          ${size}
          `}
        {...props}
      />

      {type === "password" && (
        <div
          onMouseDown={(e) => e.preventDefault()}
          className="isShowWrapper"
          onClick={changeType}
        >
          {newType === "password" ? (
            <FaRegEye className="isShowIcon" />
          ) : (
            <FaRegEyeSlash className="isShowIcon" />
          )}
        </div>
      )}

      <div className={`error`}>{error && !disabled ? error : ""}</div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
