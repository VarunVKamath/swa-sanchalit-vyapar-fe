import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import "./ButtonStyles.scss";

const ButtonView = ({ title, onClick, disabled, styles, size, tooltip }) => {
  return (
    <div className="button_control">
      <Button
        data-tip={tooltip}
        data-for="main"
        onClick={onClick}
        disabled={disabled}
        className={`${styles} ${size}`}
      >
        {title}
      </Button>

      <ReactTooltip
        className="button_tooltip"
        id="main"
        place="top"
        type="dark"
        effect="solid"
      />
    </div>
  );
};

ButtonView.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.string,
  tooltip: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonView.defaultProps = {
  disabled: false,
  styles: "primal",
  size: "",
  tooltip: "",
};

export default ButtonView;
