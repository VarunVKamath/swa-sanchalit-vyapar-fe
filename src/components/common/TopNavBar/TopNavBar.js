import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./TopNavBarStyles.scss";
import logo from "../../../assets/images/logo-ssv.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../SideBar/Sidebar";
import { HOME, LOGIN } from "../../../navigation/routes";
import { NavLink, Link } from "react-router-dom";
const TopNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar className="top-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="img" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="menu-option" exact to={HOME}>
              Home
            </NavLink>
            <NavLink className="menu-option" to={HOME}>
              Features
            </NavLink>
            <NavLink className="menu-option" to={HOME}>
              Pricing
            </NavLink>
            <NavLink className="menu-option" to={HOME}>
              About{" "}
            </NavLink>
            {/* <Link className="menu-option" exact to={LOGIN}>
              Signin
            </Link> */}
          </Nav>
        </Container>
        <div className="menu-icon">
          <AiOutlineMenu
            size={25}
            color="#FFFF"
            onClick={() => {
              // console.log("test");
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </Navbar>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default TopNavBar;
