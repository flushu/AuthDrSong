import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar/app';
import ExcelForm from './components/ExcelForm/app';
import $ from 'jquery';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import filteredChart from './selectors/charts';
import { Provider } from 'react-redux';

const store = configureStore();
const currentState = store.getState();
const sortedState = filteredChart(currentState.chart, currentState.filter);

const App = (props) => (
  <div id="app">
    <Sidebar/>
    <ExcelForm/>
  </div>
);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));