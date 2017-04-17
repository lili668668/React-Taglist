import React, { Component } from 'react';

const css = {
    backgroundColor: 'red',
    width: '20vw',
    height: document.documentElement.clientHeight
}

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div style={css}>
                Hello World
            </div>
        );
    }
}

export default SideBar;