import _ from "lodash";
import initialState from './initialState';
export const test = (state = initialState, action ='') => {
  switch (action.type) {
    case 'CHANGE':
      return _.assign({}, state, {
        "title": 'LKJHGFF'
      });
    case 'CHANGE1':
      return _.assign({}, state, {
        "title": action.title
      });
    default:
      return state;
  }
};