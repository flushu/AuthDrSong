import uuid from 'uuid';
const defaultState = {
  id: uuid(),
  name: "",
  provider: 'Alice Song',
  time: "",
  dob: "",
  note: "",
  type: "F/U",
  phone: ""
};

export default (state=defaultState, action) => {
  switch(action.type){
    case 'SET_FORM':
      return {...state, ...action.form};
    default:
      return state;
  }
};