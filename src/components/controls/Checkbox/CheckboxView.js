import React from "react";
import PropTypes from "prop-types";
import "./CheckboxStyles.scss";
import { FaCheck } from "react-icons/fa";

const Checkbox = ({
  onChange,
  className = "",
  text,
  visibility = 1,
  ...props
}) => {
  return (
    visibility === 1 && (
      <label className={`label className`}>
        <input
          type="checkbox"
          hidden={true}
          onChange={onChange}
          className="checkbox"
          {...props}
        />
        <div className="iconWrapper">
          <FaCheck className="icon" />
        </div>
        <div className="text text-muted">{text}</div>
      </label>
    )
  );
};

Checkbox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Checkbox;
