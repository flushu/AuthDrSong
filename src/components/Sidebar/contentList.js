import { connect } from 'react-redux';
import React from 'react';
import filterCharts from '../../selectors/charts';

const style_sidebar_julia = {
  borderLeft: "10px solid blue",
  paddingLeft: "5px",
  cursor: "pointer"
}
const style_sidebar_alice = {
  borderLeft: "10px solid red",
  paddingLeft: "5px",
  cursor: "pointer"
}

class ContentList extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    console.log('clicked!');
  }
  render(){
    return (
      <div id="contentlist_component">
        {
          this.props.charts.map(
            ({ id, name, provider, type }) => {
              const defined_type = type.includes("F/U") ? "F/U" : (type.includes("NP") ? "NP" : (type.includes("P/O") ? "P/O" : "SX"));
              return (
                <div
                  key={id}
                  className="nav_content"
                  style={provider === 'Julia Song' ? style_sidebar_julia : style_sidebar_alice}
                  onClick={
                    this.handleClick
                  }
                > {defined_type} | {name}
                </div>
              );
            })
        }
      </div>
    );
  }
}

const StateToProps = (state) => (
  {
    charts: filterCharts(state.chart, state.filter)
  }
);

export default connect(StateToProps)(ContentList);