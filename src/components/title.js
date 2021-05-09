import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title :"New Title"
        }
        this.setTitle = this.setTitle.bind(this);
    }
    // Title set function
    setTitle() {
        this.setState(() => {
            return {
                title: "Hello World"
            }
        });
    }
    // Title reset function
    resetTitle() {
        this.setState(() => {
            return {
                title: "New Title"
            }
        })
    }

    render() {
        return (
            <div>
                <h1 href="#" onClick={this.setTitle}>
                    {this.state.title}
                </h1>
            </div>
        );
    }
}

export default Title;