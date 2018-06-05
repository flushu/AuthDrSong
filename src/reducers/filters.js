const defaultState = {
  date: undefined,
  sortBy: "name",
  text: "",
  startTime: 0,
  endTime: 24,
  hideFinish: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SORT_BY_NAME":
      return { ...state, sortBy: "name" };
    case "SORT_BY_TIME":
      return { ...state, sortBy: "time" };
    case "SET_TEXT":
      return { ...state, text: action.text };
    case "SET_DATE":
      return { ...state, date: action.date };
    case "HIDE_FINISH":
      return { ...state, hideFinish: action.hideFinish };
    default:
      return state;
  }
};
