import React, { Component } from 'react';
import ToolBar from './ToolBar.js';

class SideBar extends Component {
    static get width() {
        return 20;
    }

    static get css() {
        return {
            display: "inline-block",
            position: "relative",
            backgroundColor: 'red',
            width: this.width + 'vw',
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