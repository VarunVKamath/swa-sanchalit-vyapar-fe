import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-date-picker";
import { FiCalendar } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import "./DatePickerStyles.scss";

const DPicker = ({
  className = "",
  name = "",
  label,
  value,
  onChange,
  error,
  disabled,
  clearIcon = true,
  size = "",
  isrequired = false,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const datePickerBlock = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const onClickOutside = ({ target }) => {
    if (datePickerBlock.current && !datePickerBlock.current.contains(target)) {
      setOpen(false);
    }
  };

  const onChangeDate = (date) => {
    onChange(date);
    setOpen(false);
  };

  const setIsOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const onClear = (e) => {
    e.stopPropagation();
    onChange(null);
    setOpen(false);
  };

  return (
    <div
      className={`b-datePicker__wrapper ${className} ${size}`}
      onClick={setIsOpen}
      ref={datePickerBlock}
    >
      <div className="b-datePicker__label">
        {label} {isrequired && <span className="text-danger">*</span>}
      </div>
      <DatePicker
        isOpen={open}
        name={name}
        onChange={onChangeDate}
        className={`b-datePicker ${error ? "date_error" : ""}`}
        // minDate={new Date()}
        // view={'decade'}
        // view={'year'}
        value={value}
        locale={"en-EN"}
        calendarType={"US"}
        // showNeighboringMonth={false}
        clearIcon={clearIcon && value ? <MdClose onClick={onClear} /> : null}
        calendarIcon={<FiCalendar className="b-datePicker__calendar-icon" />}
        yearPlaceholder={" YYYY "}
        monthPlaceholder={" MM "}
        dayPlaceholder={" DD "}
        format={"dd-MM-y"}
        next2Label={null}
        prev2Label={null}
        tileClassName="b-datePicker__item"
        disabled={disabled}
        disableCalendar={disabled}
        {...props}
      />
      <div className={`dat_error`}>{error && !disabled ? error : ""}</div>
    </div>
  );
};

DPicker.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  size: PropTypes.string,
  // value: PropTypes.object,
  clearIcon: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default DPicker;
