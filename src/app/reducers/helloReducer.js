import _ from "lodash";

const initialState = {
  "title": "QWERTY"
};

export const test = (state = initialState, action ='') => {
  switch (action.type) {
    case 'CHANGE':
      return _.assign({}, state, {
        "title": 'LKJHGFF'
      });
    default:
      return state;
  }
};