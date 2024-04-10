import React from "react";
import { bindActionCreators } from "redux";
import ReactLoading from "react-loading";
import connect from "react-redux/es/connect/connect";

import "./BigLoaderStyles.scss";

const BigLoader = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="big_loader">
          <ReactLoading
            type="spinningBubbles"
            color="#8eb1e8"
            height={100}
            width={100}
          />
          <p>Loading please wait...</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.loader.isOpen,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BigLoader);
