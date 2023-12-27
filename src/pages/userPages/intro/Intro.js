import './Intro.scss';
import images from '../../../asset/image';

function Intro() {
    return (
        <div className="intro">
            <div className="container">
                <div className="row">
                    <div className="d-block" style={{ height: '40px' }}></div>
                    <div className="col-12 intro-header">
                        <h2>KORY MEDIA</h2>
                        <div className="intro-header-line"></div>
                    </div>
                    <div className="col-12 intro-banner">
                        <img src={images.banner3intro} style={{ width: '100%', height: '350px' }} alt="banner intro" />
                    </div>
                    <div className="row intro-infro">
                        <div className="col-md-4 col-lg-4 col-ms-12 text-center">
                            <div className="intro-infro-icon">
                                <img src={images.introdiamond} alt="intro diamond" className="intro-infro-icon-img" />
                            </div>
                            <h5>CONCEPT</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat….
                            </p>
                            <button>CLICK ME!</button>
                        </div>
                        <div className="col-md-4 col-lg-4 col-ms-12 text-center">
                            <div className="intro-infro-icon">
                                <img src={images.intronetwork} alt="intro network" className="intro-infro-icon-img" />
                            </div>
                            <h5>NETWORK</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat….
                            </p>
                            <button>CLICK ME!</button>
                        </div>
                        <div className="col-md-4 col-lg-4 col-ms-12 text-center">
                            <div className="intro-infro-icon">
                                <img src={images.introeye} alt="intro eye" className="intro-infro-icon-imgeye" />
                            </div>
                            <h5>SEO</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat….
                            </p>
                            <button>CLICK ME!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap-element"></div>
        </div>
    );
}

export default Intro;
