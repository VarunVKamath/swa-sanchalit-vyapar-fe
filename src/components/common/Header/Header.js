import React from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { Nav, Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

import "./HeaderStyles.scss";

import { showSidebar } from "../../../store/sidebar/sidebarActions";

const Header = ({ showSidebar, label }) => {
  var showMenu = true;

  return (
    <div className="header fixed-top">
      <Container>
        <Nav className="header_nav" as="ul">
          <Nav.Item className="header_title d-flex align-items-center" as="li">
            <h2>{label}</h2>
          </Nav.Item>

          {showMenu && (
            <Nav.Item
              onClick={showSidebar}
              className="d-flex align-items-center sidenav_icon d-block d-md-none"
              as="li"
            >
              <GiHamburgerMenu size={20} />
            </Nav.Item>
          )}
        </Nav>
      </Container>
    </div>
  );
};

Header.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  btnData: PropTypes.array,
};

Header.defaultProps = {
  btnData: [],
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showSidebar: showSidebar,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Header);
