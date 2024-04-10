import React from "react";
import { Spinner } from "react-bootstrap";

import "./LoaderStyles.scss";

const LoaderView = ({ type = "" }) => {
  return (
    <div className={`loader ${type}`}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

LoaderView.propTypes = {};

export default LoaderView;
