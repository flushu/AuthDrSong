import Data from '../create-data';
const defaultState = Data().appointments;
// console.log(defaultState);

export default (state=defaultState,action) => {
  switch(action.type){
    case 'ADD_PT':
      console.log('adding pt');
      return [...state, action.chart];
    case 'REMOVE_PT':
      console.log('removing pt');
      return state.filter(({id})=>(id !== action.id));
    case 'EDIT_PT':
      console.log('editting pt');
      return state.map((chart)=>(
        chart.id === action.id ? {...chart,...action.updates} : chart
      ));
    default:
      return state;
  }
};