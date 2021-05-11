import React, { Component } from 'react';
import Title from '../components/title.js';
import Textarea from '../components/textarea.js';
import Image from '../components/image.js';
import Result from '../components/result.js';
import '../index.css';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "New Title",
            description: "",
            imageSrc: "",
            resultTitle: '',
            resultDescription: "",
            resultImageSrc: "",
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
    }

    changeTitle = () => {
        this.setState(() => ({ title: "Hello World" }));
        console.log(this.title);
    };

    changeDescription = (value) => {
        this.setState(() => ({ description: value }));
        console.log(this.state.description);
    };

    changeImageSrc = (value) => {
        this.setState(() => ({ imageSrc: value }));
        console.log(this.state.description);
    };

    changeResult() {
        this.setState({
            resultTitle:this.state.title,
            resultDescription:this.state.description,
            resultImageSrc: this.state.imageSrc,
        })
        this.resetState();
    }

    resetState() {
        this.setState({
            title: "New Title",
            description: "",
            imageSrc: ""
        });
    }


    render() {
        let enabledBbutton = <button className="button-enabled" onClick={() => this.changeResult()} />;
        let disabledButton = <button disabled className="button-disabled" />;
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Title title={this.state.title} changeTitle={this.changeTitle} />
                        <Textarea description={this.state.description} changeDescription={this.changeDescription} />
                        <Image changeImageSrc={this.changeImageSrc} imageSrc={this.state.imageSrc} />
                        {this.state.imageSrc ? enabledBbutton : disabledButton}
                    </div>
                    <div className="col" >
                        <Result state={this.state} />
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;
