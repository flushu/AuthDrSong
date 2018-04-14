import { createStore, combineReducers } from 'redux';

const defaultRow = () => [];
const rowReducer = (state=defaultRow, action) => {
  switch(action.type){
    default:
      return state;
  }
};

const defaultFilter = () => ({

});
const filterReducer = (state=defaultFilter, action) => {
  switch(action.type){
    default:
      return state;
  }
};

const reduxStore = createStore(
  combineReducers({
    rowReducer,
    filterReducer
  })
);

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ num } = {}) => ({
  type: 'SET',
  num
});

const resetCount = () => ({
  type: 'RESET',
  count: 0
});

const store = createStore((state = { count: 0 }, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.num
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrementCount({ decrementBy: 2}));

// unsubscribe();

store.dispatch(resetCount());

store.dispatch(setCount({num: 27}));

store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch(incrementCount());
