import React, { Component } from 'react';
import '../index.css';
import plusImage from '../img/plus.png';
class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
        this.hiddenFileInput = React.createRef();
    }

    // Image'e tıklandığında bu fonksiyon input elementini tetikliyor 
    handleClick = () => {
        this.hiddenFileInput.current.click();
    };

    //image dosyası okunuyor ve gerekli değerler değişkenlere aktarılıyor
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

    // Image ekleme butonu
    addImage() {
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
                        src={plusImage}
                        onClick={this.handleClick} />
                </div>
            </form>
        </>;
    }
    
    // Butona basıldığına giris değerlerini result'a aktarır
    handlerButton = () => {
        document.getElementById('image').src = this.state.imagePreviewUrl;
        this.setState({ imagePreviewUrl: '' });
        document.getElementById('titleText').innerHTML = document.getElementById('title').innerHTML;
        document.getElementById('title').innerHTML = "New Title";
        document.getElementById('descriptionText').value = document.getElementById('description').value;
        document.getElementById('description').value = "";
    }

    render() {

        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;

        if (imagePreviewUrl) {
            $imagePreview = <img id="imagePreview" className="image" src={imagePreviewUrl} />;
        } else {
            $imagePreview = this.addImage();
        }

        return <>
            <div >
                {$imagePreview}
                <button className={imagePreviewUrl ? "button-enabled" : 'button-disabled'} onClick={() => this.handlerButton()} />
            </div>
        </>
    }
}

export default Image;