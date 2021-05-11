import React, { Component } from 'react';
import '../index.css';


class Result extends Component {
    render() {
        return (
            <div >
                <h1 id="titleText" className="title">{null}</h1>
                <textarea readOnly id="descriptionText" className="description"></textarea>
                <img id="image" className="image" src={null} alt="" />
            </div>
        );
    }
}

export default Result;
