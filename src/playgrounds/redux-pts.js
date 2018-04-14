import { createStore, combineReducers } from 'redux';

/** actions **/
const addPt = ({
  name = '',
  dob = '',
  phone = '',
  note = '',
  id = 0,
  time = 0
} = {}) => ({
  type: 'ADD_PT',
  chart: {
    id,
    name,
    dob,
    phone,
    note,
    time
  }
});

const removePt = ({ id = 0 }={}) => ({
  type: 'REMOVE_PT',
  id
});

const editPt = (id,updates) => ({
  type: 'EDIT_PT',
  id,
  updates
});

const sortByName = () => ({
  type: 'SORT_BY_NAME'
});

const sortByTime = () => ({
  type: 'SORT_BY_TIME'
});

const reducerPtCharts = (state=[], action) => {
  switch(action.type){
    case 'ADD_PT':
      return [...state,action.chart];
    case 'REMOVE_PT':
      return state.filter(({ id })=>(id != action.id));
    case 'EDIT_PT':
      return state.map((chart)=>(
        chart.id == action.id ? {...chart, ...action.updates} : chart
      ));
    default:
      return state;
  }
};

const reducerFilterCharts = (state=[], action) => {
  switch(action.type){
    case 'SORT_BY_NAME':
      return { ...state, sortBy: 'name' }
    case 'SORT_BY_TIME':
      return { ...state, sortBy: 'time' }
    default:
      return state;
  }
};

const store = createStore(combineReducers({
  charts: reducerPtCharts,
  filter: reducerFilterCharts
}));

const filterCharts = (charts, { sortBy }) => {
  if(sortBy === undefined)
    return charts;
  else 
    return charts.sort((a,b)=>{
      if(sortBy === 'time'){
        console.log("sorting by time");
        return a.time > b.time ? 1 : -1;
      }
      else if(sortBy === 'name'){
        console.log("sorting by name");
        return a.name > b.name ? 1 : -1;
      }
    });
};

store.subscribe(()=>{
  const data = store.getState();
  console.log(data);
  const filteredData = filterCharts(data.charts, data.filter);
  console.log(filteredData);
});

const ptOne = store.dispatch(addPt({name:"Ben Morrison",dob:"03/20/1997",phone:"714-616-6303",note:"Blurry OS", id: 1, time: "15:30"}));
const ptTwo = store.dispatch(addPt({name:"Mike Song",dob:"04/03/1949",phone:"616-741-3910",note:"Entropion", id: 2, time: "13:00"}));

// store.dispatch(removePt({id: ptOne.chart.id}));

store.dispatch(editPt(ptTwo.chart.id,{phone:"562-505-0695"}));

store.dispatch(sortByName());
store.dispatch(sortByTime());

const obj = {
  name: 'ben',
  dob: '03/20/1997'
};

// console.log({
//   dob: '04/03/1957',
//   ...obj,
//   location: 'California',
//   name: 'Mike'
// });