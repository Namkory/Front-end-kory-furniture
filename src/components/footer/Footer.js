import './Footer.scss';
import images from '../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faLocationDot, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={images.logo} alt="logo" className="footer-content-left-logo" />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ....</p>
                </div>
                <div className="footer-content-mid">
                    <h1>VỀ CHÚNG TÔI</h1>
                    <ul className="footer-content-mid-list">
                        <li className="footer-content-mid-list-item">
                            <FontAwesomeIcon icon={faLocationDot} className="footer-content-mid-list-item-icon" />
                            <p>319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                        </li>
                        <li className="footer-content-mid-list-item">
                            <FontAwesomeIcon icon={faPhone} className="footer-content-mid-list-item-icon" />
                            <p>0126 922 0162</p>
                        </li>
                        <li className="footer-content-mid-list-item">
                            <FontAwesomeIcon icon={faEnvelope} className="footer-content-mid-list-item-icon" />
                            <p>demonhunter@gmail.com</p>
                        </li>
                        <li className="footer-content-mid-list-item">
                            <FontAwesomeIcon icon={faSkype} className="footer-content-mid-list-item-icon" />
                            <p>demonhunterp</p>
                        </li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h1>ĐĂNG KÝ NHẬN TIN</h1>
                    <div className="footer-content-right-input">
                        <input type="text" placeholder="Email..." className="inp" />
                        <button className="btn">ĐĂNG KÝ</button>
                    </div>
                    <p className="footer-content-right-text">
                        You may unsubscribe at any moment. For that purpose, please find our contact info in the legal
                        notice.
                    </p>
                </div>
            </div>
            <div className="footer-bottom">svs</div>
        </div>
    );
}

export default Footer;
