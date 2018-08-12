import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';

class Index extends Component {
  render() {
    return (
      <div className="box">
        <p className="text">Hello World</p>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
