import React from "react";
import AutosizeInput from "react-input-autosize";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="header">
        <Row1 data={!!this.props.data ? this.props.data : undefined} />
        <Row2 />
      </div>
    );
  }
}

const Row1 = props => (
  <div className="header_row1">
    <Col1 data={!!props.data ? props.data : undefined} />
    <Col2 data={!!props.data ? props.data : undefined} />
    <Col3 data={!!props.data ? props.data : undefined} />
  </div>
);

class Col1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value_chartup: "",
      value_elig: "",
      value_arrival: "",
      value_prep: "",
      type: !!props.data ? props.data.type : "",
      provider: !!props.data ? props.data.provider : "",
      location: !!props.data
        ? props.data.date.includes("Mon") ||
          props.data.date.includes("Tue") ||
          props.data.date.includes("Thu")
          ? "Los Alamitos"
          : "Pasadena"
        : ""
      // location: !!props.data ? "Pasadena" : ""
    };
  }
  render() {
    return (
      <div className="header_col1">
        <div className="group">
          <div className="header_col1_row1">
            <input className="ref_input" type="text" />
            <table>
              <thead>
                <tr>
                  <td>Elig</td>
                  <td>Prep</td>
                  <td>Arrival</td>
                  <td>Chart up</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td><AutosizeInput value={this.state.value_elig} onChange={
                    (e) => {
                      this.setState({value_elig: e.target.value});
                    }
                  } /></td>
                  <td><AutosizeInput value={this.state.value_prep} onChange={
                    (e) => {
                      this.setState({value_prep: e.target.value})
                    } 
                  }/></td>
                  <td><AutosizeInput value={this.state.value_arrival} onChange={
                    (e) => {
                      this.setState({value_arrival: e.target.value});
                    }  
                  }/></td>
                  <td><AutosizeInput value={this.state.value_chartup} onChange={
                    (e) => {
                      this.setState({ value_chartup: e.target.value });
                    }
                  } /></td> */}
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="header_col1_row2">
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.location.includes("Los Alamitos")}
                />{" "}
                Los Alamitos
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.location.includes("Pasadena")}
                />{" "}
                Pasadena
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.type.includes("NP")}
                />{" "}
                NP
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.type.includes("F/U")}
                />{" "}
                F/U
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.type.includes("P/O")}
                />{" "}
                P/O
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.type.includes("SX")}
                />{" "}
                SX
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Col2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: !!props.data ? props.data.type : "",
      note: !!props.data ? props.data.note : "",
      provider: !!props.data ? props.data.provider : ""
    };
  }
  render() {
    return (
      <div className="header_col2">
        <div>
          <label>
            <input
              type="checkbox"
              checked={this.state.provider.includes("ALICE SONG")}
            />{" "}
            Alice Song, M.D.
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.state.provider.includes("JULIA SONG")}
            />{" "}
            Julia Song, M.D.
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.state.provider.includes("JANET KIM")}
            />{" "}
            Janet Kim, M.D.
          </label>
        </div>
        <div>
          <textarea
            cols={60}
            rows={3}
            value={this.state.note}
            onChange={e => {}}
          />
        </div>
      </div>
    );
  }
}

class Col3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: !!props.data ? props.data.name : "",
      dob: !!props.data ? props.data.dob : "",
      apt_time: !!props.data
        ? props.data.date.substr(5) + " " + props.data.time
        : "",
      phone: !!props.data ? props.data.phone : ""
    };
  }
  render() {
    return (
      <div className="header_col3">
        <div className="group">
          <div>
            Name:{" "}
            <AutosizeInput
              value={this.state.name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div>
            Phone:{" "}
            <input
              id="phone_input"
              type="text"
              value={this.state.phone}
              onChange={e => {
                const phone = e.target.value;
                this.setState({
                  phone
                });
              }}
            />
          </div>
          <div>
            DOB:{" "}
            <input
              id="dob_input"
              type="text"
              value={this.state.dob}
              onChange={e => {
                const dob = e.target.value;
                this.setState({
                  dob
                });
              }}
            />
          </div>
          <div>
            Apt Time:{" "}
            <input
              id="apt_time_input"
              type="text"
              value={this.state.apt_time}
              onChange={e => {
                const apt_time = e.target.value;
                this.setState({
                  apt_time
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const Row2 = () => (
  <div className="header_row2">
    Legends: // Eye(E): 1 OD, 2 OS, 3 OU // Lid(L): 1 RUL, 2 RLL, 4 LUL, 5 LLL
    // X: space holder // Y Severity: 1 mid, 2 moderate, 3 severe // Z encouter:
    A initial, D subsequent, S sequelac
  </div>
);

export default Header;
