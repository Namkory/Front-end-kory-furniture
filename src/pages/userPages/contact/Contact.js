import './Contact.scss';

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact-left">
                    <div className="contact-left-header">
                        <h1>GET IN TOUCH</h1>
                        {/* <div className="contact-left-header-img">
                        <img src={images.bell1} alt="bell" />
                    </div> */}
                    </div>
                    <div className="contact-left-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <p>
                            Um quist, a seque et audae. Namus aut voloriae. Ecesti volupta sinihil maxim hit quis dicid
                            ut dolorer spiscip suntium eveniet hicatibus, omnit dignam ulparis aut odit, et expero
                            tectiossi acitis aribus dis cus soluptur a dolo incipis plam, expe enditatatur aut et
                            volorpor aute repta non coreri dellaboratur acea praeritio blaut voluptio. Xerum quame re pe
                            officae.
                        </p>
                    </div>
                    {/* <div className="contact-left-footer">
                    <div className="contact-left-footer-img">
                        <img src={images.bell1} alt="bell" />
                    </div>
                </div> */}
                </div>
                <div className="contact-right">
                    <div className="contact-right-form">
                        <form>
                            <div className="contact-name">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="contact-email">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="contact-phone">
                                <input type="text" placeholder="Phone number" />
                            </div>
                            <textarea rows="4" cols="70" placeholder="Ghi chú"></textarea>

                            <div className="contact-btn">
                                <button type="submit" className="contact-submit ">
                                    <span>Gửi</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
