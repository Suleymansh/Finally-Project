// import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logoo.webp";
import { useNavigate } from "react-router-dom";
// import { useCart } from 'react-use-cart';
import { useAppContext } from "./context/appContext";
// import Lang from './Lang';
// import Mode from '../common/Mode';
// import { useEffect } from 'react';

const Header = () => {
  const { favorites } = useAppContext();
  // const {totalItems}= useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();
  //       const [mode, setMode] = useState(localStorage.getItem("mode"));
  //  useEffect(() => {
  //    document.body.className = mode;
  //  }, [mode]);

  const handleLogoutClick = () => {
    localStorage.clear();
    navigate("/login");
  };

  const getName = localStorage.getItem("nameData");
  const getPass = localStorage.getItem("passData");

  const autoButton = () => {
    if (getName === null && getPass === null) {
      return (
        <>
          <Link className=" ico my-3" id="login" to="/login">
            <i className="fa-solid fa-user"></i>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <div className="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle me-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {getName}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="." onClick={handleLogoutClick}>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Logout
              </a>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <Navbar className=" navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <NavLink className="logo" to="/">
            <img width={60} src={logo} alt="err" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav-total ms-auto">
            <NavLink to="/" className=" nav">
              {t("header.1")}
            </NavLink>
            <NavLink to="/about" className=" nav">
              {t("header.2")}
            </NavLink>

            <NavLink to="/shop" className=" nav">
              {t("header.3")}
            </NavLink>

            <NavLink to="/contact" className=" nav">
              {t("header.4")}
            </NavLink>
          </Nav>

          <div className="icons ms-auto">
            <NavLink to="/shop" className="ico   ">
              <i class="fa-solid fa-magnifying-glass"></i>
            </NavLink>

            <NavLink to="/favorites" className=" iconh  ">
              <span className="number">{favorites.length}</span>
              <i class="fa-solid fa-heart heart-one"> </i>{" "}
            </NavLink>

            {autoButton()}
          </div>

          {/* <div className="d-flex"> */}
            {/* <Lang /> */}
            {/* <Mode modedata={mode} setModedata={setMode} /> */}
          {/* </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
