import Home from "../app/components/home/home";
import EachArticle from "../app/components/article/eachArticle";
import ArticleByCategory from "../app/components/article/articleByCategory";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/article/:id",
    exact: true,
    component: EachArticle
  },
  {
    path: "/articles/:category",
    exact: true,
    component: ArticleByCategory
  }
];
export default routes;