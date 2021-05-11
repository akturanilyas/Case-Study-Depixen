import React, { Component } from 'react';

class Title extends Component {
   
    render() {
        return (
            <div>
                <h1 id="title" href="#" onClick={this.props.changeTitle} >
                    {this.props.title}
                </h1>
            </div>
        );
    }
}

export default Title;