import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { removePt } from '../../actions/charts';
import { sortByTime, sortByName } from '../../actions/filters';
import { setForm } from '../../actions/form';
import filterCharts from '../../selectors/charts';
import { changeTTtoHour } from '../../utils/utils';
import { editPt } from '../../actions/charts';
import uuid from 'uuid';

class Table extends React.Component{
  constructor(props){
    super(props);
    this.removeRow = this.removeRow.bind(this);
  }
  removeRow(event,id){
    event.preventDefault();
    this.props.dispatch(removePt({id}));
  }
  render() {
    console.log(this.props.charts.length);
    return (
      <div id="table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th id="th_time" onClick={(e)=>{
                this.props.dispatch(sortByTime());
              }}>Apt Time</th>
              <th>Provider</th>
              <th id="th_name" onClick={(e)=>{
                this.props.dispatch(sortByName());
              }}>Name</th>
              <th>DOB</th>
              <th>Type</th>
              <th>Note</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={(e) => {
              this.props.dispatch(setForm({
                id: uuid(),
                name: "",
                provider: 'Alice Song',
                time: "",
                dob: "",
                note: "",
                type: "F/U",
                phone: ""
              }))
            }}>
              <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
            </tr>
            {
              this.props.charts.map(
                ({id,time,name,provider,dob,type,note, phone, finished})=>(
                  <tr key={id} onClick={(e)=>{
                    let hour = changeTTtoHour(time);
                    this.props.dispatch(setForm({id,time: hour,name,provider,dob,type,note, phone}))
                  }}>
                    <td><input type="checkbox" checked={finished} onChange={(e)=>{
                      this.props.dispatch(editPt({id, updates: { finished: e.target.checked }}))
                    }}/></td>
                    <td>{time}</td>
                    <td>{provider}</td>
                    <td>{name}</td>
                    <td>{dob}</td>
                    <td>{type}</td>
                    <td>{note}</td>
                    <td><a href="/" onClick={(e)=> this.removeRow(e,id)}>Remove</a></td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
};

const stateToProps = (state) => (
  {
    charts: filterCharts(state.chart, state.filter)
  }
);

// $(document).ready(()=>{
//   $('#table tbody tr').click(()=>{
//     console.log("clicked!");
//   })
// });

export default connect(stateToProps)(Table);