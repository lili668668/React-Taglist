import React, { Component } from 'react';
import ToolBar from './ToolBar.js';

class SideBar extends Component {
    static get css() {
        return {
            backgroundColor: 'red',
            width: '20vw',
            height: "calc(100% - " + ToolBar.height + "vw)"
        }
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div style={SideBar.css}>
                Hello World
            </div>
        );
    }
}

export default SideBar;