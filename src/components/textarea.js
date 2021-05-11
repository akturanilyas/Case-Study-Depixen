import React, { Component } from 'react';
import '../index.css';

class Textarea extends Component {

    render() {
        return (
            <div>
                <textarea id="description"
                    className="description"
                    placeholder="New description" />
            </div>
        );
    }
}

export default Textarea;
