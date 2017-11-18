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
          <Link className={`${styles["media-left"]}`}  to={'/article/' + this.props.article.id}>
            <img alt="" src={this.props.article.featuredImage} />
          </Link>
          <div className={`${styles["media-body"]}`}>
            <Link className={`${styles["media-left"]}`} to={'/article/' + this.props.article.id}>
              {this.props.article.title}
            </Link>
          </div>
        </div>
      </li>
    );
  }
}