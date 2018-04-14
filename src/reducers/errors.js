export default (state=[], action) => {
  switch(action.type){
    case 'NAME_ERROR':
      return {...state, name_nan: action.name_nan}
    default:
      return state
  }
};