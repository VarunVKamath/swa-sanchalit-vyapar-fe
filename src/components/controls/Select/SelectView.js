import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./SelectStyles.scss";

const SelectView = ({
  className = "",
  isrequired = false,
  error,
  label,
  options,
  isSearchable,
  isClearable,
  ...props
}) => {
  return (
    <div className="select_wrapper">
      <span className={`select__label text-muted`}>
        {label} {isrequired && <span className="text-danger">*</span>}
      </span>
      <Select
        options={options}
        isClearable={!!isClearable}
        isSearchable={!!isSearchable}
        className={`select ${className} ${error ? "error" : ""}`}
        classNamePrefix="select"
        placeholder={""}
        {...props}
      />
      <div className={`errorText`}>{error ? error : ""}</div>
    </div>
  );
};

SelectView.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  isSearchable: PropTypes.bool,
  isClearable: PropTypes.bool,
  options: PropTypes.array,
};

export default SelectView;
