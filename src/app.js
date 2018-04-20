import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import $ from 'jquery';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import filteredChart from './selectors/charts';
import { Provider } from 'react-redux';
// import './firebase/firebase';

const store = configureStore();
const currentState = store.getState();
const sortedState = filteredChart(currentState.chart, currentState.filter);

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));