import React from 'react';
import FrontPage from './FrontPage';
import BackPage from './BackPage';
import {connect} from 'react-redux';
import filterChart from '../../../selectors/charts';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="superbills">
        <div id="superbill">
          <FrontPage />
          <BackPage />
        </div>
        {
          this.props.appointments.map(
            (chart)=>{
              return(
                <div id="superbill" key={chart.id}>
                  <FrontPage data={chart} />
                  <BackPage />
                </div>
              )
            }
          )
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    appointments: filterChart(state.chart, state.filter)
  }
};

export default connect(mapStateToProps)(App);