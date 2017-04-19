import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Components/Frame/SideBar';
import ToolBar from './Components/Frame/ToolBar';
import MainField from './Components/Frame/MainField';

class App extends React.Component {
  static get css() {
    return {
      height: '100%',
      width: '100%'
    }
  }

  static get tableCss() {
    return {
      display: "table",
      height: "calc(100% - " + ToolBar.height + "vw)",
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
        <div style={App.tableCss}>
          <SideBar/>
          <MainField/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));