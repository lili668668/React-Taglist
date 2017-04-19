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
            borderRadius: "5px",
            color: "white",
            fontSize: "20px",
            display: "inline-block",
            width: "calc(100% - " + this.buttonCss.width + ")"
        }
    }

    static get marginCss() {
        return {
            padding: this.margin + "vw"
        }
    }

    static get buttonCss() {
        return {
            display: "inline-block",
            width: "5vw"
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
                <form>
                    <input style={AddEntry.buttonCss} type="submit" value="新增" />
                    <input style={AddEntry.css} type="text" />
                </form>
            </div>
        );
    }
}

export default AddEntry;