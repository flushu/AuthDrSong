import { connect } from 'react-redux';
import React from 'react';
import filterCharts from '../../selectors/charts';

const ContentList = (props) => (
  <div>
    {
      props.charts.map(
        ({id, name, provider})=>
          (<div key={id} className="nav_content"><a href="/">{provider.includes("Alice") ? "Dr. A: " + name : "Dr. J: " + name}</a></div>)
        )
    }
  </div>
);

const StateToProps = (state) => (
  {
    charts: filterCharts(state.chart, state.filter)
  }
);

export default connect(StateToProps)(ContentList);