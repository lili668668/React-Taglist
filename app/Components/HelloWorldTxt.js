import React, { Component } from 'react';


const red = {
    color: 'red'
}

class HelloWorldTxt extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <h1 style={red}>Hello World</h1>
        );
    }
}

export default HelloWorldTxt;