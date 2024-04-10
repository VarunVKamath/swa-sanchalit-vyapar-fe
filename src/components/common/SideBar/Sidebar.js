import React from "react";

import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

// BsClipboard
import "./SidebarStyles.scss";
import { HOME, CHANGE_PASSWORD } from "../../../navigation/routes";
import { MdClose } from "react-icons/md";
import { logout } from "../../../store/auth/authActions";
const Sidebar = ({ logout, isOpen, setIsOpen }) => {
  const onLogOut = () => {
    logout();
  };

  return (
    <>
      <div
        className={`sidenav_wrapper_box d-block  ${
          isOpen ? "sidenav_wrapper_box_open" : "sidenav_wrapper_box_close"
        }`}
      >
        <Container>
          <Navbar className="sidenav_wrapper_box_navbar">
            <div onClick={() => setIsOpen(!isOpen)} className="navbar_close">
              <MdClose size={25} />
            </div>
            <Nav className="flex-column">
              <NavLink className="nav-link mt-1" exact to={HOME}>
                <span className="side_nav_content">Home Screen</span>
              </NavLink>
              <p className="nav-link mt-1" onClick={onLogOut}>
                <span className="side_nav_content">Logout</span>
              </p>
              <NavLink className="nav-link" exact to={CHANGE_PASSWORD}>
                <span className="side_nav_content">Change Password</span>
              </NavLink>
              <div className="other-nav">
                <NavLink className="nav-link mt-3" exact to={HOME}>
                  <span className="side_nav_content">Features</span>
                </NavLink>
                <NavLink className="nav-link mt-3" exact to={HOME}>
                  <span className="side_nav_content">Pricing</span>
                </NavLink>
                <NavLink className="nav-link mt-3" exact to={HOME}>
                  <span className="side_nav_content">About</span>
                </NavLink>
              </div>
            </Nav>
          </Navbar>
        </Container>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  //logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //profileURL: state.auth.profileurl,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout: logout,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
