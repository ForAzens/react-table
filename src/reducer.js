export const SET_HEADERS = "SET_HEADERS";

export const defaultState = {
  headers: []
};

export function reducer(state, action) {
  switch (action.type) {
    case SET_HEADERS:
      return { ...state, headers: action.payload };
    default:
      // do nothing
      return state;
  }
}

export function setHeaders(dispatch, headers) {
  dispatch({ type: SET_HEADERS, payload: headers });
}
