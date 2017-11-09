import React, { Component } from "react";
import * as styles from "./article.css";
import Link from "../../../core/components/link";

export default class ArticleLists extends Component {
  
  render() {
    var marginStyle = {
      marginTop: "0px"
    };

    return (
      <li style={marginStyle}>
        <div className="media">
          <Link className={`${styles["media-left"]}`} to="/article/1">
            <img alt="" src="images/post_img1.jpg" />
          </Link>
          <div className={`${styles["media-body"]}`}>
            <Link className={`${styles["media-left"]}`} to="/article/1">
                Aliquam malesuada diam eget turpis varius 2. data
            </Link>
          </div>
        </div>
      </li>
    );
  }
}