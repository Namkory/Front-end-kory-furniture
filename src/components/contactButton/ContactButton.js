import './ContactButton.scss';
import images from '../../asset/image/index';

function ContactButton() {
    return (
        <div className="contact-button d-flex flex-column">
            <a href="#" className="contact-button-item">
                <img src={images.iconphone} />
            </a>
        </div>
    );
}

export default ContactButton;
