import React, { Component } from 'react';
import '../index.css';

class Textarea extends Component {
    render() {
        return (
            <div>
                <textarea id="description"
                    className="description"
                    rows={15}
                    placeholder="New description"
                    onChange={() => this.props.changeDescription(document.getElementById('description').value)}
                    value={this.props.description} />
            </div>
        );
    }
}

export default Textarea;
