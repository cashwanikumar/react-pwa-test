import React, { Component } from "react";
import ArticleListDiv from "../article/articleListDiv";
// import * as styles from "./styles.css";
import ArticleApi from '../../api/mockArticleApi';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as helloActions from '../../actions/helloAction'


class Home extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      articleCategories: []
    };
  }

  componentWillMount() {
    this.props.actions.loadTitle();
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
          {this.props.title}
          {this.state.articleCategories.map(articleCategory =>
                  <ArticleListDiv key={articleCategory.id} categoryId={articleCategory.id} articleCategoryTitle={articleCategory.title} />
          )}
          <ArticleListDiv />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    title: state.test.title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(helloActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);