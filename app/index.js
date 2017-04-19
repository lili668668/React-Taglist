import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Components/SideBar';
import ToolBar from './Components/ToolBar';
import MainField from './Components/MainField';

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
        <MainField/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));