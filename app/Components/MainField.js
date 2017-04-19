import React, { Component } from 'react';
import ToolBar from './ToolBar.js';
import SideBar from './SideBar.js';

class MainField extends Component {
    static get css() {
        return {
            display: "inline-block",
            position: "relative",
            backgroundColor: "blue",
            height: "calc(100% - " + ToolBar.height + "vw)",
            width: "calc(100% - " + SideBar.width + "vw)"
        }
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={MainField.css}>
                Hello World
            </div>
        );
    }
}

export default MainField;