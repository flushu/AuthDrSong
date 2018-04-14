import React from 'react';
import { connect } from 'react-redux';
import { editPt, addPt } from '../../actions/charts';
import { changeHourToTT } from '../../utils/utils';
import { setForm } from '../../actions/form';
import $ from 'jquery';
import uuid from 'uuid';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {
      _insType: ["None", "Allied", "Brand New Day", "Caremore", "Prospect"],
    }
  }
  add(e) {
    e.preventDefault();
    const chart = {
      ...this.props.form,
      id: uuid(),
      time: changeHourToTT(this.props.form.time)
    };
    this.props.dispatch(addPt(chart));
  }
  edit(e){
    e.preventDefault();
    const update = {
      ...this.props.form,
      time: changeHourToTT(this.props.form.time)
    }
    this.props.dispatch(editPt({id: this.props.form.id, updates: update}));
  }
  render() {
    return (
      <div>
        <form >
          <table>
            <thead>
              <tr>
                <th>Apt Time</th>
                <th>Name</th>
                <th>DOB</th>
                <th>Provider</th>
                <th>Type</th>
                <th>Note</th>
                {/* <th>CPT Codes</th>
              <th>Auth Request</th>
              <th>Auth Number</th>
              <th>Auth Upload</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input id="time_input" type="time" name="aptTime" onChange={(e)=>{this.props.dispatch(setForm({time: e.target.value}))}} value={this.props.form.time}/></td>
                <td><input id="name_input" type="text" name="name" onChange={(e)=>{this.props.dispatch(setForm({name: e.target.value}))}} value={this.props.form.name}/></td>
                {/* <td>
                <select name="insType">
                  {Object
                    .keys(this.state._insType)
                    .map(
                      (key) => <option key={key}>{this.state._insType[key]}</option>
                    )
                  }
                </select>
              </td> */}
                <td><input id="dob_input" type="dob" name="dob" onChange={(e)=>{this.props.dispatch(setForm({dob: e.target.value}))}} value={this.props.form.dob}/></td>
                <td><select id="provider_input" name="provider" onChange={(e) => { this.props.dispatch(setForm({ provider: e.target.value })) }} value={this.props.form.provider}>
                  <option>Alice Song</option><option>Julia Song</option>
                </select></td>
                <td><select id="type_input" name="type" onChange={(e)=>{this.props.dispatch(setForm({type: e.target.value}))}} value={this.props.form.type}>
                  <option>F/U</option><option>F/U HMO</option><option>NP</option><option>NP HMO</option><option>P/O</option><option>P/O HMO</option><option>In-SX</option><option>In-SX HMO</option>
                </select></td>
                <td><textarea id="note_input" name="note" cols={40} rows={2} onChange={(e)=>{this.props.dispatch(setForm({note: e.target.value}))}} value={this.props.form.note}/></td>
                {/* <td><input type="text" name="cptCodes" /></td>
              <td><input type="date" name="authRequest" /></td>
              <td><input type="text" name="authNumber" /></td>
              <td><input type="file" name="authUpload" /></td> */}
                <td><button id="add_btn" onClick={this.add}>Add</button></td>
                <td><button id="edit_btn" onClick={this.edit}>Edit</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
};

const stateToProps = (state) => ({
  charts: state.chart,
  form: state.form
});

export default connect(stateToProps)(Form);