import React from 'react';
import Resizable from 're-resizable';
import sizeMe from 'react-sizeme';
import { connect } from 'react-redux';
import filterCharts from '../../selectors/charts';

const style_for_resizable = {
  border: 'solid 1px #ddd',
  background: 'grey',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
};
const rows_1 = {
  border: "solid 1px black",
  flexBasis: '5%',
  width: '98%',
};
const rows_2 = {
  border: "solid 1px black",
  flexBasis: '90%',
  width: '98%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  overflow: 'scroll'
};
const rows_2_col1 = {
  background: 'white',
  width: '49%',
  display: 'flex',
  flexDirection: 'column'
};
const rows_2_col2 = {
  background: 'white',
  width: '49%',
};
const appointment_card = {
  background: 'blue',
  padding: '1%',
  flexBasis: '10px'
};

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const { width, height } = this.props.size;
    return (
      <div id="schedule_component">
        <Resizable
          style={style_for_resizable}
          defaultSize={{
            width: 400,
            height: 500
          }}
          minWidth={400}
          maxWidth={1000}
          grid={[50, 50]}
        >
          <div id="schedule_row1" style={rows_1}>
            
          </div>
          <div id="schedule_row2" style={rows_2}>
            <div
              style={rows_2_col1}
            >

            </div>
            <div
              style={rows_2_col2}
            >
            </div>
          </div>
        </Resizable>
      </div>
    );
  }
};

const appointment_cards = () => (
  <div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
    <div style={appointment_card}></div>
  </div>
)

const config = {
  monitorWidth: true,
  monitorHeight: true
}

const SizeApp = sizeMe(config)(App);

const StateToProps = (state) => (
  {
    charts: filterCharts(state.chart, state.filter)
  }
);

export default connect(StateToProps)(SizeApp);