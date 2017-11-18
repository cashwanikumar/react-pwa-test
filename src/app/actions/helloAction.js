export const TITLE = 'CHANGE';
export const TITLE1 = 'CHANGE1';

export const screenLoading = () => {

  return {
    type: TITLE,
    state: [{'title':'POIUYTR'}]
  };
};

export function loadTest() {
  return {
    type: TITLE1, 'title':'THuxnk-redu'
  };
}

export function loadTitle() {
  return function(dispatch) {
    setTimeout(() => dispatch(loadTest()), 8000);
  };
}
