import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Components/SideBar';
import ToolBar from './Components/ToolBar';

class App extends React.Component {
  static get css() {
    return {
      height: '100%',
      width: '100%'
    }
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div style={App.css}>
        <ToolBar/>
        <SideBar/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));