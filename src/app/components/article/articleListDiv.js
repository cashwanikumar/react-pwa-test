import React, { Component } from "react";
import ArticleLists from "./articleLists";
import * as styles from "./article.css";
import ArticleApi from '../../api/mockArticleApi';

export default class ArticleListDiv extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    if (this.props.categoryId) {
      ArticleApi.getAllArticlesOfCategory(this.props.categoryId).then(articles => {
        this.setState({articles: articles});
      }).catch(error => {
        throw (error);
      });
    }
  }
  
  render() {
    if (this.props.categoryId) {
      return (
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className={`${styles["latest_post"]}`}>
              <h2><span>{this.props.articleCategoryTitle}</span></h2>

              <div className={`${styles["latest_post_container"]}`}>
                <div id="prev-button"><i className="fa fa-chevron-up"></i></div>
                <ul className={`${styles["latest_postnav"]}`}>
                  {this.state.articles.map(article =>
                          <ArticleLists key={article.id} article={article}/>
                  )}
                </ul>
                <div id="next-button"><i className="fa  fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
      );
    } else {
      return (<div></div>);
    }
  }
}