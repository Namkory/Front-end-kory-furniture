// import './Bunk.scss';
import numeral from 'numeral';
import MultiRangeSlider from 'multi-range-slider-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productDetail } from '../productDetail/ProductData';
import Card from 'react-bootstrap/Card';
import { fetchProducts } from '../../../services/productService';

function Bunk() {
    const [minValue, set_minValue] = useState(1000000);
    const [maxValue, set_maxValue] = useState(25000000);
    const [bunk, setBunk] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    useEffect(() => {
        const filteredProducts = bunk.filter((product) => product.price >= minValue && product.price <= maxValue);
        setFilterProducts(filteredProducts);
    }, [minValue, maxValue, bunk]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const res = await fetchProducts();
            const badProducts = res.filter((product) => product.category?.id === 2);
            setBunk(badProducts);
            // console.log('check res', badProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className="bed container">
            <div className="bed-container">
                <div className="bed-left">
                    <div className="bed-left-header">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1 className="bed-left-header-home">TRANG CHỦ</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="bed-left-header-bed">GIƯỜNG NGỦ</h1>
                    </div>
                    <div className="bed-left-categoty">
                        <div className="bed-left-categoty-title">DANH MỤC SẢN PHẨM</div>
                        <div className="bed-left-categoty-content">
                            <Link to="/bed" style={{ textDecoration: 'none' }}>
                                <p>GIƯỜNG NGỦ</p>
                            </Link>
                            <span></span>
                            <Link to="/cat" style={{ textDecoration: 'none' }}>
                                <p>GIƯỜNG TẦNG</p>
                            </Link>
                        </div>
                    </div>
                    <div className="bed-left-range">
                        <div className="bed-left-range-title">LỌC THEO GIÁ</div>
                        <MultiRangeSlider
                            min={1000000}
                            max={25000000}
                            step={5}
                            ruler="flase"
                            minValue={minValue}
                            maxValue={maxValue}
                            onInput={(e) => {
                                handleInput(e);
                            }}
                        />
                        <div className="bed-left-range-btn">
                            <div className="bed-left-range-btn-price">
                                GIÁ:
                                <b>
                                    {numeral(minValue).format('0,0')} <u>đ</u> - {numeral(maxValue).format('0,0')}{' '}
                                    <u>đ</u>
                                </b>
                            </div>
                        </div>
                    </div>
                    <div className="bed-right-products-title">SẢN PHẨM</div>
                    <div className="bed-right-products">
                        {productDetail.slice(0, 5).map((item, index) => {
                            return (
                                <div key={index} className="bed-right-products-item">
                                    <img src={item.linkImg} alt="avatar product" className="avatar" />
                                    <div className="bed-right-products-item-infor">
                                        <p>{item.title}</p>
                                        <p>
                                            <b>
                                                {numeral(+item.price).format('0,0')}
                                                <u>đ</u>
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="bed-right">
                    <div className="row">
                        {filterProducts.map((item, index) => {
                            return (
                                <Card key={index} className="card mb-3 md-3">
                                    <Card.Img variant="top" className="card-img" src={item.thumbnail} />
                                    <Card.Body>
                                        <Card.Title className="card-title">{item.name}</Card.Title>
                                        <Card.Text className="card-content">
                                            {numeral(+item.price).format('0,0')}
                                            <b>
                                                <u>đ</u>
                                            </b>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bunk;
