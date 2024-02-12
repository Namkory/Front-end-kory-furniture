import './ContactButton.scss';
import images from '../../asset/image/index';
import { Link } from 'react-router-dom';

function ContactButton() {
    return (
        <div className="contact-button d-flex flex-column">
            <a href="#" className="contact-button-item">
                <img src={images.iconmess} />
            </a>
            <a href="#" className="contact-button-item">
                <img src={images.iconzalo} />
            </a>
            <a href="#" className="contact-button-item">
                <img src={images.iconphone} />
            </a>
            {/* <p className="contact-button-item-phone">0909360314</p> */}
        </div>
    );
}

export default ContactButton;
