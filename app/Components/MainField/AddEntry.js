import React, { Component } from 'react';

class AddEntry extends Component {
    static get height() {
        return 5;
    }

    static get css() {
        return {
            backgroundColor: "yellow",
            height: this.height + 'vw'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={AddEntry.css}>
                Hello World
            </div>
        );
    }
}

export default AddEntry;