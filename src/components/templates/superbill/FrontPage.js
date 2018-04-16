import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class FrontPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="frontpage">
        {
          this.props.data ? <Header data={this.props.data} /> : <Header />
        }
        <Body />
        <Footer />
      </div>
    );
  }
}

export default FrontPage;