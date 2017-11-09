import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import Link from "../../../core/components/link";
import * as styles from "./header.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem  } from "react-bootstrap";

const Header = (props) => {
  return (
    // <div className="container">
    //   <Link className="m-2" to="/">Logo</Link>
    //   <ul className="nav d-inline-flex">
    //     <li className="nav-item">
    //       <Link
    //         className={classNames("nav-link", {active: props.url === "/"})}
    //         to="/"
    //       >
    //         Home <span className="sr-only">(current)</span>
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
    <div>
      <header id="header">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={`${styles["header_top"]}`}>
              <div className={`${styles["header_top_left"]}`}>
                <ul className={`${styles["top_nav"]}`}>
                  <li>
                    <a href="/">Home</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={`${styles["header_bottom"]}`}>
              <h3> News Logo banner </h3>
            </div>
          </div>
        </div>
      </header>
      <section id="navArea">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li role="presentation">
                <a href="/articles/movies">Movie</a>
              </li>
              <li role="presentation">
                <a href="/articles/sports">Sports</a>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </div>
  );
};

export default connect(state => { return {url: state.router.pathname}; })(Header);