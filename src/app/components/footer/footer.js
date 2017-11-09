import React from "react";
import * as styles from "./footer.scss";

const Footer = () => {
  "use strict";
  return (
    <footer className={styles.footer} >
      <div className="container">
        <span>
          Copyright
          <a
            href="http://google.com"
            target="_blank"
            rel="noopener"
          >
          @2017
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;