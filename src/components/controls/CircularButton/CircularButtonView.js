import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import "./CircularButtonstyles.scss";

const CircularButtonView = ({ Icon, onClick, disabled, size, tooltip }) => {
  return (
    <button
      onClick={onClick}
      data-tip={tooltip}
      data-for="main"
      disabled={disabled}
      className="circular_btn"
    >
      <Icon size={size} />
      <ReactTooltip
        className="circukar_tooltip"
        id="main"
        place="top"
        type="dark"
        effect="solid"
      />
    </button>
  );
};

CircularButtonView.propTypes = {
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.number,
  tooltip: PropTypes.string,
};

CircularButtonView.defaultProps = {
  disabled: false,
  size: 20,
  tooltip: "",
};

export default CircularButtonView;
