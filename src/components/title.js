import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div>
                <h1 id="title" href="#" onClick={() => {
                       document.getElementById('title').innerHTML = 'Hello World';
                }}>
                    New Title
                </h1>
            </div>
        );
    }
}

export default Title;