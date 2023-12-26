import Banner from '../../../components/banner/Banner';
import images from '../../../asset/image';
import './Home.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from './dataFake';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faPiggyBank, faTruck } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="home">
            <Banner />
            {/* Phần Giường Ngủ  */}
            <div className="container home-bed">
                <h2>GIƯỜNG NGỦ</h2>
                <div className="home-bed-line"></div>
                <Slider {...settings}>
                    {dataDigitalBestSeller.map((item) => (
                        <div className="card">
                            <div className="card-top">
                                <img src={item.linkImg} alt={item.title} />
                                <h1>{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <h3>{item.price}</h3>
                                <h3>{item.category}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="emty"></div>
            {/* Phần banner 1*/}
            <div className="banner">
                <div className="overlay"></div>
                <div className="container text-center">
                    <div className="row row-collapse">
                        <div className="col-lg-4 col-md-4 col-sm-12 banner-content">
                            <FontAwesomeIcon icon={faTruck} className="banner-content-icon" />
                            <p>MIỄN PHÍ GIAO HÀNG</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 banner-content">
                            <FontAwesomeIcon icon={faGift} className="banner-content-icon" />
                            <p>QÙA TẶNG ĐẶC BIỆT</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 banner-content">
                            <FontAwesomeIcon icon={faPiggyBank} className="banner-content-icon" />
                            <p>TIẾT KIỆM KHI MUA Ở KORY</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Phần Giường Tầng  */}
            <div className="container home-bed">
                <h2>GIƯỜNG TẦNG</h2>
                <div className="home-bed-line"></div>
                <Slider {...settings}>
                    {dataDigitalBestSeller.map((item) => (
                        <div className="card">
                            <div className="card-top">
                                <img src={item.linkImg} alt={item.title} />
                                <h1>{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <h3>{item.price}</h3>
                                <h3>{item.category}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="emty"></div>
            {/* Phần banner 2*/}
            <div className="banner-2">
                <div className="row m-0 p-0">
                    <div className="col-lg-4 col-md-4 col-sm-12 m-0 p-0 banner-2-item">
                        <img src={images.banner21} alt="banner2-1" className="banner-2-item-img" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-0 p-0 banner-2-item">
                        <img src={images.banner22} alt="banner2-2" className="banner-2-item-img" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-0 p-0 banner-2-item">
                        <img src={images.banner23} alt="banner2-3" className="banner-2-item-img" />
                    </div>
                </div>
            </div>
            {/* Phần Phụ Kiện  */}
            <div className="container home-bed">
                <h2>PHỤ KIỆN</h2>
                <div className="home-bed-line"></div>
                <Slider {...settings}>
                    {dataDigitalBestSeller.map((item) => (
                        <div className="card">
                            <div className="card-top">
                                <img src={item.linkImg} alt={item.title} />
                                <h1>{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <h3>{item.price}</h3>
                                <h3>{item.category}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="emty"></div>
            <div className="banner-3">
                <div className="banner-3-content">
                    <h3>CHANGE THIS TO ANYTHING</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut
                    </p>
                    <p>laoreet dolore magna aliquam erat volutpat.</p>
                    <button>MUA NGAY</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
