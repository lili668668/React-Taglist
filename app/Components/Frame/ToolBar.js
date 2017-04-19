import React, { Component } from 'react';

class ToolBar extends Component {
    static get height() {
        return 5;
    }

    static get css() {
        return {
            backgroundColor: "yellow",
            height: ToolBar.height + 'vw'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={ToolBar.css}>
                Hello World
            </div>
        );
    }
}

export default ToolBar;