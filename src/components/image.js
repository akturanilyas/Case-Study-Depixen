import React, { Component } from 'react';

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
            <form onSubmit={(e) => this._handleSubmit(e)}>
                <div>
                    <input className="fileInput"
                        type="file"
                        ref={this.hiddenFileInput}
                        style={{ display: 'none' }}
                        onChange={(e) => this._handleImageChange(e)} />
                    <img width="300" src="https://upload.wikimedia.org/wikipedia/commons/3/30/OCR-A_char_Plus_Sign.svg"
                        onClick={this.handleClick} />
                </div>
            </form>
        </>;
    }

    render() {

        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = this.imagePreview();
        }

        return <>
            <div>
                {$imagePreview}
            </div>
        </>
    }
}

export default Image;