import '../create-data';
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is info: {props.info}</p>
  </div>
);

const withAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.auth ? <WrappedComponent {...props} /> : <div>Go to Login!</div>
      }
    </div>
  )
};

const AuthInfo = withAuth(Info);

ReactDOM.render(<AuthInfo auth={false} info="Hello, World!"/>,document.getElementById("root"));