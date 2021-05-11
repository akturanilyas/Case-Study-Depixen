import React from 'react';
import '../index.css';
import plusImage from '../img/plus.png';
class Image extends React.Component {
    constructor(props) {
        super(props);
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
            this.props.changeImageSrc(reader.result);
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
                        onClick={this.handleClick}
                        alt={""} />
                </div>
            </form>
        </>;
    }

    render() {

        let { imageSrc } = this.props;
        let $imagePreview = null;

        if (imageSrc) {
            $imagePreview = <img id="imagePreview" className="image" src={imageSrc} alt={""} />;
        } else {
            $imagePreview = this.addImage();
        }

        return <>
            <div >
                {$imagePreview}
            </div>
        </>
    }
}

export default Image;