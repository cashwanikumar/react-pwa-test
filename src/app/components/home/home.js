import React, { Component } from "react";
import ArticleListDiv from "../article/articleListDiv";
// import * as styles from "./styles.css";

export default class Home extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <ArticleListDiv />
        </div>
      </div>
    );
  }
}