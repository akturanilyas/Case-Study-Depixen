import React, { Component } from 'react';
import '../index.css';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
        this.hiddenFileInput = React.createRef();
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    handleClick = () => {
        this.hiddenFileInput.current.click();
    };

    imagePreview() {
        return <>
            <form >
                <div>
                    <input
                        type="file"
                        ref={this.hiddenFileInput}
                        style={{ display: 'none' }}
                        onChange={(e) => this._handleImageChange(e)} />
                    <img
                        className="image"
                        src="https://pics.freeicons.io/uploads/icons/png/6540698631554126213-512.png"
                        onClick={this.handleClick} />
                </div>
            </form>
        </>;
    }

    render() {

        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;

        if (imagePreviewUrl) {
            $imagePreview = <img className="image" src={imagePreviewUrl} />;
        } else {
            $imagePreview = this.imagePreview();
        }

        return <>
            <div >
                {$imagePreview}
                <button className={imagePreviewUrl ? "button-enabled" : 'button-disabled'} />
            </div>
        </>
    }
}

export default Image;