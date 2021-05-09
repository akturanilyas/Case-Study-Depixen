import React, { Component } from 'react';
import '../index.css';

class Textarea extends Component {
    render() {
        return (
            <div>
                <textarea rows="15" id="description" placeholder="Write something..." />
            </div>
        );
    }

    test() {
        console.log(document.getElementById("description").value);
    }
}

export default Textarea;
