import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Components/SideBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <SideBar/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));