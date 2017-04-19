import React, { Component } from 'react';

class Entry extends Component {
    static get height() {
        return 4;
    }

    static get margin() {
        return 1;
    }

    static get css() {
        return {
            backgroundColor: "Brown",
            height: this.height + "vw",
            borderRadius: "5px"
        }
    }

    static get marginCss() {
        return {
            width: "100%",
            padding: this.margin + "vw",
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
            <div style={Entry.marginCss}>
                <div style={Entry.css}>
                    Hello World
                </div>
            </div>
        );
    }
}

export default Entry;