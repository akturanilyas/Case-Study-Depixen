import React, { Component } from 'react';
import Title from '../components/title.js';
import Textarea from '../components/textarea.js';
import Image from '../components/image.js';
import Result from '../components/result.js';
import '../index.css';

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Title />
                        <Textarea />
                        <Image />
                    </div>
                    <div className="col" >
                        <Result />
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;
