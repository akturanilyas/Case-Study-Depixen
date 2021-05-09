import React, { Component } from 'react';
import '../index.css';

class Textarea extends Component {
    render() {
        return (
            <div>
                <textarea id="description" placeholder="New description" />
            </div>
        );
    }

    test() {
        console.log(document.getElementById("description").value);
    }
}

export default Textarea;
