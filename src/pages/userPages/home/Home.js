import Banner from '../../../components/banner/Banner';
import images from '../../../asset/image';
import './Home.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { handleAddProduct, handleGetDetail } from '../../../util/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import numeral from 'numeral';
import { faCartShopping, faCircleInfo, faGift, faPiggyBank, faTruck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../../services/productService';
import { Link } from 'react-router-dom';

function Home({ render }) {
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
    const [bad, setBad] = useState([]);
    const [bunk, setBunk] = useState([]);
    const [accessory, setAccessory] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const res = await fetchProducts();

            // Lọc sản phẩm có category.id === 1 và 2 và 3
            const badProducts = res.filter((product) => product.category?.id === 1);
            const bunkProducts = res.filter((product) => product.category?.id === 2);
            const accessoryProducts = res.filter((product) => product.category?.id === 3);

            // Cập nhật state bad và bunk và accessory
            setBad(badProducts);
            setBunk(bunkProducts);
            setAccessory(accessoryProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    console.log('check badd', bad);

    return (
        <div className="home">
            <Banner />
            <div className="emtyy"></div>
            {/* Phần Giường Ngủ  */}
            <div className="container home-bed">
                <h2>GIƯỜNG NGỦ</h2>
                <div className="home-bed-line"></div>
                <Slider {...settings}>
                    {bad.map((item) => (
                        <div className="card">
                            <div className="card-top">
                                <img
                                    src={item.thumbnail ? item.thumbnail : images.noImg}
                                    alt={item.name}
                                    className="card-top-img"
                                />
                                <div className="btn-add">
                                    <button
                                        onClick={() => handleAddProduct(item, render)}
                                        type="button"
                                        className="btn"
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} className="icon" />
                                    </button>
                                </div>
                                <div className="btn-detail">
                                    <Link to="/">
                                        <button
                                            // onClick={() => handleGetDetail(item, render())}
                                            type="button"
                                            className="btn"
                                        >
                                            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <h1>{item.name}</h1>
                                <h3>
                                    {numeral(+item.price).format('0,0')}
                                    <b>
                                        <u>đ</u>
                                    </b>
                                </h3>
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
            <div className="emtyy"></div>
            {/* Phần Giường Tầng  */}
            <div className="container home-bed">
                <h2>GIƯỜNG TẦNG</h2>
                <div className="home-bed-line"></div>
                <Slider {...settings}>
                    {bunk.map((item) => (
                        <div className="card">
                            <div className="card-top">
                                <img
                                    src={item.thumbnail ? item.thumbnail : images.noImg}
                                    alt={item.name}
                                    className="card-top-img"
                                />
                                <div className="btn-add">
                                    <button
                                        onClick={() => handleAddProduct(item, render)}
                                        type="button"
                                        className="btn"
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} className="icon" />
                                    </button>
                                </div>
                                <div className="btn-detail">
                                    <Link to="/">
                                        <button
                                            // onClick={() => handleGetDetail(item, render())}
                                            type="button"
                                            className="btn"
                                        >
                                            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <h1>{item.name}</h1>
                                <h3>
                                    {numeral(+item.price).format('0,0')}
                                    <b>
                                        <u>đ</u>
                                    </b>
                                </h3>
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
            <div className="emtyy"></div>
            {/* Phần Phụ Kiện  */}
            <div className="container home-bed">
                <h2>PHỤ KIỆN</h2>
                <div className="home-bed-line"></div>
                <Slider {...settings}>
                    {accessory.map((item) => (
                        <div className="card">
                            <div className="card-top">
                                <img
                                    src={item.thumbnail ? item.thumbnail : images.noImg}
                                    alt={item.name}
                                    className="card-top-img"
                                />
                                <div className="btn-add">
                                    <button
                                        onClick={() => handleAddProduct(item, render)}
                                        type="button"
                                        className="btn"
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} className="icon" />
                                    </button>
                                </div>
                                <div className="btn-detail">
                                    <Link to="/">
                                        <button
                                            // onClick={() => handleGetDetail(item, render())}
                                            type="button"
                                            className="btn"
                                        >
                                            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <h1>{item.name}</h1>
                                <h3>
                                    {numeral(+item.price).format('0,0')}
                                    <b>
                                        <u>đ</u>
                                    </b>
                                </h3>
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
