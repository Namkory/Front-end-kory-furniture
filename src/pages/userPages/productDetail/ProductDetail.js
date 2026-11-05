import './ProductDetail.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import numeral from 'numeral';
import { useNavigate } from 'react-router-dom';
import { productDetail } from './ProductData';
import ContactButton from '../../../components/contactButton/ContactButton';

function ProductDetail({ render }) {
    const userId = 1;
    const [quantity, setQuantity] = useState(1);
    const [dataProduct] = useState([]);
    const handleUpdateQuantity = (action) => {
        if (action === 'increase') {
            setQuantity(quantity + 1);
        } else if (action === 'decrease') {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    };
    const navigate = useNavigate();
    const handleAddNewProduct = async (data) => {
        const dataLocal = await JSON.parse(localStorage.getItem('products'));
        if (dataLocal) {
            const exits = dataLocal.find((item) => {
                return item.id === data.id;
            });
            if (exits) {
                dataLocal.forEach((item) => {
                    if (item.id === data.id) {
                        return (item.quantity = item.quantity + quantity);
                    }
                });
                localStorage.setItem('products', JSON.stringify(dataLocal));
            } else {
                localStorage.setItem(
                    'products',
                    JSON.stringify([
                        ...dataLocal,
                        {
                            id: data.id,
                            name: data.name,
                            image: data.thumbnail,
                            quantity: quantity,
                            price: data.price,
                        },
                    ]),
                );
            }
        } else {
            localStorage.setItem(
                'products',
                JSON.stringify([
                    { id: data.id, name: data.name, image: data.thumbnail, quantity: quantity, price: data.price },
                ]),
            );
        }
        navigate('/');
        render();
    };

    return (
        <>
            {userId ? (
                <div className="productDetail container">
                    <div className="productDetail-container">
                        <div className="row">
                            <div className="productDetail-left col-12 col-lg-4 order-2 order-lg-1">
                                <div className="productDetail-left-products-title">SẢN PHẨM</div>
                                <div className="productDetail-left-products">
                                    {productDetail.slice(0, 5).map((item, index) => {
                                        return (
                                            <div key={index} className="productDetail-left-products-item">
                                                <img src={item.linkImg} alt="avatar product" className="avatar" />
                                                <div className="productDetail-left-products-item-infor">
                                                    <p className="title">{item.title}</p>
                                                    <p>
                                                        <b>
                                                            {numeral(item.price).format('0,0')}
                                                            <u>đ</u>
                                                        </b>
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="productDetail-right col-12 col-lg-7 order-1 order-lg-2">
                                <div className="wrapper-right-productDetail">
                                    <div className="productDetail-right-img">
                                        <img src={dataProduct.thumbnailData} alt="golden" />
                                    </div>
                                    <div className="productDetail-right-infor">
                                        <div className="productDetail-right-header">
                                            <Link to="/" style={{ textDecoration: 'none' }}>
                                                <h1 className="productDetail-right-header-home">TRANG CHỦ</h1>
                                            </Link>
                                            <span>/</span>
                                            <h1 className="productDetail-right-header-dog">GIƯỜNG NGỦ</h1>
                                        </div>
                                        <div className="productDetail-right-title">
                                            <h1>{dataProduct.name}</h1>
                                        </div>
                                        <h1>{numeral(dataProduct.salePrice).format('0,0')}đ</h1>
                                        <p>{dataProduct.description}</p>
                                        <div className="productDetail-right-infor-footer">
                                            <div className="quantity-item">
                                                <div
                                                    onClick={() => handleUpdateQuantity('increase')}
                                                    className="quantity-item-icon"
                                                >
                                                    +
                                                </div>
                                                <p>{quantity}</p>
                                                <div
                                                    onClick={() => handleUpdateQuantity('decrease')}
                                                    className="quantity-item-icon"
                                                >
                                                    -
                                                </div>
                                            </div>
                                            <div className="productDetail-right-infor-footer-btn">
                                                <p onClick={() => handleAddNewProduct(dataProduct)}>Add to cart</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactButton />
                </div>
            ) : (
                <div className="emty">
                    <h3>Bạn phải đăng nhập để xem chi tiết sản phẩm</h3>
                </div>
            )}
        </>
    );
}

export default ProductDetail;
