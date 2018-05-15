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

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
          <div id="schedule_row1">

          </div>
          <div id="schedule_row2">
            <AppointmentCards />
          </div>
        </Resizable>
      </div>
    );
  }
};

const AppointmentCards = () => (
  <div id="appointment_cards">
    <table>
      <tbody>
        <tr>
          <td className="apt_card_time">06:00</td>
          <td className="apt_card_alice">
            <div className="appointment_card_container">
              <div>Ben Morrison</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </td>
          <td className="apt_card_julia">
            <div className="appointment_card_container">
              <div>Ben Morrison</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="apt_card_time">06:15</td>
          <td className="apt_card_alice">
            <div className="appointment_card_container">
              <div>Mike Song</div>
              <div></div>
              <div></div>
              <div></div>
            </div>

          </td>
          <td className="apt_card_julia">
            <div className="appointment_card_container">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

          </td>

        </tr>
        <tr>
          <td className="apt_card_time">06:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">06:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">07:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">07:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">07:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">07:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">08:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">08:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">08:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">08:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">09:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">09:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">09:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">09:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">10:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">10:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">10:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">10:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">11:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">11:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">11:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">11:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">12:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">12:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">12:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">12:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">13:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">13:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">13:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">13:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">14:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">14:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">14:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">14:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">15:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">15:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">15:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">15:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">16:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">16:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">16:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">16:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">17:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">17:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">17:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">17:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">18:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">18:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">18:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">18:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">19:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">19:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">19:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">19:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">20:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">20:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">20:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">20:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">21:00</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">21:15</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">21:30</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>

        </tr>
        <tr>
          <td className="apt_card_time">21:45</td>
          <td className="apt_card_alice"></td>
          <td className="apt_card_julia"></td>
        </tr>
      </tbody>
    </table>
  </div>
)
const AppointmentCards2 = () => (
  <div id="appointment_card2" style={rows_2_col2}>
    <table>
      <tbody>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>
        <tr>

        </tr>

      </tbody>
    </table>
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