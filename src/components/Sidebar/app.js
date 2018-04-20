import React from 'react';
import ContentList from './contentList';
import { setText, setFinished } from '../../actions/filters';
import { connect } from 'react-redux';
import filterCharts from '../../selectors/charts';

class App extends React.Component{
  constructor(props){
    super(props);
    this.navShow = this.navShow.bind(this);
    this.navContentClickHandler = this.navContentClickHandler.bind(this);
    this.state = {
      "nav-button-text": "<<-",
      "hidden": false
    }
  }
  navShow(e){
    e.preventDefault();
    const hiddenStateChanged = !this.state.hidden;
    const nav_button_text_changed = hiddenStateChanged ? "->>" : "<<-"; 
    this.setState(
      (prevState)=>(
        {
          "hidden": hiddenStateChanged,
          "nav-button-text": nav_button_text_changed
        }
      )
    )
    this.props.dispatch(setFinished({hideFinish: hiddenStateChanged}));
  }
  navContentClickHandler(e){
    e.preventDefault();
  }
  render(){
    return(
      <div id="sidebar">
        <button id="nav-show" onClick={this.navShow} >{this.state["nav-button-text"]}</button>
        <div hidden={this.state.hidden}>
          <input type="text" id="search_pt_input" onChange={(e)=>{
            this.props.dispatch(setText({text: e.target.value}));
          }}/>
          <div id="sidebar_btns" style={{marginTop: "5px"}}>
            <button id="create_superbill_btn">Superbills</button>
            <button id="create_excel_btn">Table</button>
          </div>
          <div id="nav_contents" style={{marginTop: "5px", marginRight: "10px"}}>
            <ContentList />
            {/* <a href="/" onClick={this.navContentClickHandler}><div className="nav_content">Benjamin Morrison</div></a>
            <a href="/" onClick={this.navContentClickHandler}><div className="nav_content">Mike Song</div></a>
            <a href="/" onClick={this.navContentClickHandler}><div className="nav_content">Honda asdfjk asjdfl asd </div></a> */}
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => ({
  charts: filterCharts(state.chart, state.filter)
});

export default connect(stateToProps)(App);