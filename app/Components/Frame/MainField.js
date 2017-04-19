import React, { Component } from 'react';
import ToolBar from './ToolBar.js';
import SideBar from './SideBar.js';

import AddEntry from '../MainField/AddEntry.js';
import EntryField from '../MainField/EntryField.js';

class MainField extends Component {
    static get css() {
        return {
            display: "table-cell",
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
                <AddEntry/>
                <EntryField/>
            </div>
        );
    }
}

export default MainField;