import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import chartReducer from '../reducers/charts';
import filterReducer from '../reducers/filters';
import errorReducer from '../reducers/errors';
import formReducer from '../reducers/form';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      chart: chartReducer,
      filter: filterReducer,
      errors: errorReducer,
      form: formReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}