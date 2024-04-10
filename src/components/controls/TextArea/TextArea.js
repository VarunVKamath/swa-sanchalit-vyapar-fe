import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./TextAreaStyles.scss";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const inputRef = React.createRef();

const TextArea = ({
  error,
  tabIndex = 0,
  type,
  className = "",
  label,
  disabled,
  size = "",
  setFocus = 0,
  isrequired = false,
  row = 3,
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

  return (
    <div className="wrapper">
      <span className={`label text-muted`}>
        {label} {isrequired && <span className="text-danger">*</span>}
      </span>
      <textarea
        rows={row}
        ref={inputRef}
        type={newType}
        tabIndex={tabIndex}
        disabled={disabled}
        className={`
          textarea
          ${error && !disabled ? "textarea_error" : ""}
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

TextArea.propTypes = {
  type: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

TextArea.defaultProps = {
  type: "text",
};

export default TextArea;
