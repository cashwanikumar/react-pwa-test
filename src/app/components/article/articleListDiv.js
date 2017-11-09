import React, { Component } from "react";
import ArticleLists from "./articleLists";
import * as styles from "./article.css";

export default class ArticleListDiv extends Component {
  
  render() {
    return (
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className={`${styles["latest_post"]}`}>
          <h2><span>Latest post</span></h2>
          <div className={`${styles["latest_post_container"]}`}>
            <div id="prev-button"><i className="fa fa-chevron-up"></i></div>
            <ul className={`${styles["latest_postnav"]}`}>
              <ArticleLists />
            </ul>
            <div id="next-button"><i className="fa  fa-chevron-down"></i></div>
          </div>
        </div>
      </div>
    );
  }
}