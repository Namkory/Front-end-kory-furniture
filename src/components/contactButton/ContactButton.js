import './ContactButton.scss';
import images from '../../asset/image/index';

function ContactButton() {
    return (
        <div className="contact-button d-flex flex-column">
            <a href="tel:01269220162" className="contact-button-item">
                <img src={images.iconphone} alt="Gọi điện cho Kory Furniture" />
            </a>
        </div>
    );
}

export default ContactButton;
