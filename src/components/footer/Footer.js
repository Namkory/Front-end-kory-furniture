import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-ms-12 footer-content-left">
                        {/* <img src={images.logo} alt="logo" className="" /> */}
                        <h3 className="">Kory Furniture</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ....</p>
                        <div className="footer-content-left-social-media-relate">
                            <p>
                                <FontAwesomeIcon icon={faFacebook} className="icon-media" />
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faInstagram} className="icon-media" />
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faYoutube} className="icon-media" />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-ms-12 footer-content-mid">
                        <h3>VỀ CHÚNG TÔI</h3>
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
                    <div className="col-md-4 col-lg-4 col-ms-12 footer-content-right">
                        <h3>ĐĂNG KÝ NHẬN TIN</h3>
                        <div className="footer-content-right-email">
                            <input type="text" placeholder="Email..." className="inp" />
                            <button className="btn">ĐĂNG KÝ</button>
                        </div>
                        <p className="">
                            You may unsubscribe at any moment. For that purpose, please find our contact info in the
                            legal notice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
