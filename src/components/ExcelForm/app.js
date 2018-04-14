import React from 'react';
import Form from './Form';
import Table from './Table';
import { connect } from 'react-redux';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="excelform">
        <Form />
        <Table />
      </div>
    );
  }
};

const stateToProps = (state) => ({
  form: state.form
});

export default connect(stateToProps)(App);