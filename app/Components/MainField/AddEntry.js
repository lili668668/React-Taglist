import React, { Component } from 'react';

class AddEntry extends Component {
    static get height() {
        return 4;
    }

    static get margin() {
        return 1;
    }

    static get css() {
        return {
            backgroundColor: "green",
            height: this.height + "vw",
            borderRadius: "5px"
        }
    }

    static get marginCss() {
        return {
            padding: this.margin + "vw"
        }
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={AddEntry.marginCss}>
                <div style={AddEntry.css}>
                    Hello World
                </div>
            </div>
        );
    }
}

export default AddEntry;