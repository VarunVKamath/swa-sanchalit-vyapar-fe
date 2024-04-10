import React from "react";
import PropTypes from "prop-types";
import { Header, Footer, Sidebar, TopNavBar } from "../common";
import styles from "./MainLayoutStyles.scss";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import SideBarMobile from "../common/SideBarMobile/SideBarMobile";
import { IoFastFood } from "react-icons/io5";
import { logout } from "../../store/auth/authActions";

class MainLayout extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="page_content_wrapper">
        <TopNavBar />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  getState: PropTypes.func.isRequired,
  stateLoaded: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout: logout,
    },
    dispatch
  );

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
