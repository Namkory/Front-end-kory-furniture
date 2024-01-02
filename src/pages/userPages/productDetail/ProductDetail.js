import './ProductDetail.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import numeral from 'numeral';
import images from '../../../asset/image/index';
import { productDetail } from './ProductData';

function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const localProductDetail = [
        {
            id: 1,
            image: images.banner1,
            name: 'Sản phẩm 1',
            price: 350000,
            description:
                'Giường gỗ tự nhiên GHS-966 được làm từ 100% gỗ tự nhiên với thiết kế trang trọng , lịch lãm luôn là điểm nhấn trong căn phòng ngủ của bạn là đơn vị cung cấp giường ngủ uy tín. Hãy để chúng tôi tô điểm không gian sống nhà bạn.',
        },
    ];
    // const [productDetails, setProductDetails] = useState([]);
    // useEffect(() => {
    //     const getAllProductDetails = async () => {
    //         const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-product?categoryId=3`);
    //         const allproductDetails = res.data.products;
    //         setProductDetails(allproductDetails);
    //     };
    //     getAllProductDetails();
    // }, []);
    const handleUpdateQuantity = (action) => {
        if (action === 'increase') {
            setQuantity(quantity + 1);
        } else if (action === 'decrease') {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    };
    // const handleAddNewProduct = async (data) => {
    //     const dataLocal = await JSON.parse(localStorage.getItem('products'));
    //     if (dataLocal) {
    //         //localstorage ton tai 1 san pham
    //         const exits = dataLocal.find((item) => {
    //             return item.id === data.id;
    //         });
    //         if (exits) {
    //             dataLocal.forEach((item) => {
    //                 if (item.id === data.id) {
    //                     return (item.quantity = item.quantity + quantity);
    //                 }
    //             });
    //             localStorage.setItem('products', JSON.stringify(dataLocal));
    //         } else {
    //             localStorage.setItem(
    //                 'products',
    //                 JSON.stringify([
    //                     ...dataLocal,
    //                     { id: data.id, name: data.title, image: data.image, quantity: quantity, price: data.price },
    //                 ]),
    //             );
    //         }
    //     } else {
    //         //add new
    //         localStorage.setItem(
    //             'products',
    //             JSON.stringify([
    //                 { id: data.id, name: data.title, image: data.image, quantity: quantity, price: data.price },
    //             ]),
    //         );
    //     }
    // };

    return (
        <div className="productDetail container">
            <div className="productDetail-container">
                <div className="row">
                    <div className="productDetail-left col-lg-4">
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
                    <div className="productDetail-right col-lg-7">
                        {localProductDetail.map((item, index) => {
                            return (
                                <div key={index} className="wrapper-right-productDetail">
                                    <div className="productDetail-right-img">
                                        <img src={item.image} alt="golden" />
                                    </div>
                                    <div className="productDetail-right-infor">
                                        <div className="productDetail-right-header">
                                            <Link to="/">
                                                <h1 className="productDetail-right-header-home">TRANG CHỦ</h1>
                                            </Link>
                                            <span>/</span>
                                            <h1 className="productDetail-right-header-dog">GIƯỜNG NGỦ</h1>
                                        </div>
                                        <div className="productDetail-right-title">
                                            <h1>{item.name}</h1>
                                        </div>
                                        <h1>{numeral(item.price).format('0,0')}đ</h1>
                                        <p>{item.description}</p>
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
                                                {/* <p onClick={() => handleAddNewProduct(item)}>{t('addtocart')}</p> */}
                                                <p>Add to cart</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
