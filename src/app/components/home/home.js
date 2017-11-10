import React, { Component } from "react";
import ArticleListDiv from "../article/articleListDiv";
// import * as styles from "./styles.css";
import ArticleApi from '../../api/mockArticleApi';

export default class Home extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      articleCategories: [
        {
          Categories:"",
          title:"sachin",
          id:"1"
        }
      ]
    };
  }

  componentWillMount() {
    ArticleApi.getAllCategories().then(articleCategories => {
      this.setState({articleCategories:articleCategories});
    }).catch(error => {
      throw (error);
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.articleCategories.map(articleCategory =>
                  <ArticleListDiv key={articleCategory.id} articleCategory={articleCategory} />
          )}
          <ArticleListDiv />
        </div>
      </div>
    );
  }
}