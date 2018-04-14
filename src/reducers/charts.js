import Data from '../create-data';
const defaultState = Data().appointments;
// console.log(defaultState);

export default (state=defaultState,action) => {
  switch(action.type){
    case 'ADD_PT':
      return [...state, action.chart];
    case 'REMOVE_PT':
      return state.filter(({id})=>(id !== action.id));
    case 'EDIT_PT':
      return state.map((chart)=>(
        chart.id === action.id ? {...chart,...action.updates} : chart
      ));
    default:
      return state;
  }
};