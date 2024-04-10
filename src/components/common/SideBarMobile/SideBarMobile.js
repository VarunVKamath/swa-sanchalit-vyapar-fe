import React from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";

import { MdClose } from "react-icons/md";

import { Nav, Navbar, Container, NavLink } from "react-bootstrap";

// BsClipboard

import "./SideBarMobileStyles.scss";
import {} from "../../../navigation/routes";
import { hideSidebar } from "../../../store/sidebar/sidebarActions";

const SideBarMobile = ({ isOpen, hideSidebar }) => {
  return (
    <>
      <div
        className={`clip_wrapper_mobile d-block d-md-none ${
          isOpen ? "clip_wrapper_mobile_open" : "clip_wrapper_mobile_close"
        }`}
      ></div>
      <div
        className={`sidenav_wrapper_mobile d-block d-md-none ${
          isOpen
            ? "sidenav_wrapper_mobile_open"
            : "sidenav_wrapper_mobile_close"
        }`}
      >
        <Container>
          <Navbar className="sidenav_wrapper_mobile_navbar">
            <div onClick={hideSidebar} className="navbar_close">
              <MdClose size={25} />
            </div>
            <Nav></Nav>
          </Navbar>
        </Container>
      </div>
    </>
  );
};

SideBarMobile.propTypes = {
  isOpen: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isOpen: state.sidebar.isOpen,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      hideSidebar: hideSidebar,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMobile);
