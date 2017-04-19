import React, { Component } from 'react';
import SideBar from '../Frame/SideBar.js';

import AddEntry from './AddEntry.js';

import Entry from '../EntryField/Entry.js';

class EntryField extends Component {
    static get css() {
        return {
            backgroundColor: "Coral",
            overflowY: "scroll",
            height: document.body.clientHeight,
            position: "static"
        }
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={EntryField.css}>
                {
                    this.props.entries.map((entry) => (
                        <Entry title={entry.title}/>
                    ))
                }
            </div>
        );
    }
}

EntryField.propTypes = {
    entries: React.PropTypes.array
}

EntryField.defaultProps = {
    entries: []
}

export default EntryField;