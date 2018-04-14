import {createStore, combineReducers } from 'redux';
import chartReducer from '../reducers/charts';
import filterReducer from '../reducers/filters';
import errorReducer from '../reducers/errors';
import formReducer from '../reducers/form';

export default () => {
  const store = createStore(
    combineReducers({
      chart: chartReducer,
      filter: filterReducer,
      errors: errorReducer,
      form: formReducer
    })
  );
  return store;
}