import React, { Component } from 'react';
import '../index.css';


class Result extends Component {
    render() {
        let { resultTitle,
            resultDescription,
            resultImageSrc } = this.props.state;
        return (
            <div >
                <h1 id="titleText" className="title">{resultTitle}</h1>
                <textarea readOnly id="descriptionText" className="description" rows={15} value={resultDescription}></textarea>
                <img id="image" className="image" src={resultImageSrc ? resultImageSrc : null} alt="" />
            </div>
        );
    }
}

export default Result;
