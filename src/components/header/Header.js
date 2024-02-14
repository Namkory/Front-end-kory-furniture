import {
    faBagShopping,
    faBars,
    faDeleteLeft,
    faGlobe,
    faSearch,
    faTimes,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import images from '../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalLogin from '../modal/ModalLogin';
import numeral from 'numeral';
import { fetchProducts } from '../../services/productService';
import { debounce } from 'lodash';

function Header() {
    const productStorage = JSON.parse(localStorage.getItem('products'));
    const [state, setState] = useState(0);
    const [iconn, setIcon] = useState(true);
    const [isActive, setIsActive] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const handleTonggleIcon = () => {
        setIcon(!iconn);
        console.log('checkk');
    };
    const handleMenuClick = (index) => {
        setIsActive(index);
    };
    const handleTotalProduct = (data) => {
        const arr = [];
        if (data && data.length > 0) {
            data.forEach((item) => {
                arr.push(item.price * item.quantity);
            });
            const total = arr.reduce((a, b) => {
                return a + b;
            });
            const formattedTotal = numeral(total).format('0,0');
            return formattedTotal;
        }
    };
    const handleDeleteProduct = (id, index) => {
        let arr = [...productStorage];
        const exits = productStorage.find((product) => {
            return product.id === id;
        });

        if (exits) {
            arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
            localStorage.setItem('products', JSON.stringify(arr));
            setState(state + 1);
        }
    };
    const delayedAPICall = debounce(async () => {
        const res = await fetchProducts();
        const filterProductsSearch = res.filter((product) => product.name.includes(searchValue));
        setFilteredProducts(filterProductsSearch);
    }, 3000); // Delay API call by 3 seconds

    useEffect(() => {
        delayedAPICall();
    }, [searchValue]);
    console.log('checkkkkk', filteredProducts);

    return (
        <div className="header">
            <div className="header-content container">
                <Link to="/">
                    <div className="header-logo" onClick={() => handleMenuClick(0)}>
                        <img src={images.logokory} alt="logo" className="header-logo-icon" />
                    </div>
                </Link>
                <div className="header-menu">
                    <ul id={iconn ? 'navbar' : 'active'} className="header-menu-list">
                        {/* <Link to="/intro"> */}
                        <li
                            className={`header-menu-list-item ${isActive === 1 ? 'active' : null}`}
                            onClick={() => handleMenuClick(1)}
                        >
                            <Link to="/intro" className="header-menu-list-item-link">
                                <p> GIỚI THIỆU </p>
                            </Link>
                        </li>
                        {/* </Link> */}
                        <li
                            className={`header-menu-list-item ${isActive === 2 ? 'active' : null}`}
                            onClick={() => handleMenuClick(2)}
                        >
                            <Link to="/bed" className="header-menu-list-item-link">
                                <p> GIƯỜNG NGỦ </p>
                            </Link>
                        </li>
                        <li
                            className={`header-menu-list-item ${isActive === 3 ? 'active' : null}`}
                            onClick={() => handleMenuClick(3)}
                        >
                            <Link to="/bunkbed" className="header-menu-list-item-link">
                                <p> GIƯỜNG TẦNG </p>
                            </Link>
                        </li>
                        <li
                            className={`header-menu-list-item ${isActive === 4 ? 'active' : null}`}
                            onClick={() => handleMenuClick(4)}
                        >
                            <Link to="/accessory" className="header-menu-list-item-link">
                                <p> PHỤ KIỆN </p>
                            </Link>
                        </li>
                        {/* <li
                            className={`header-menu-list-item ${isActive === 2 ? 'active' : null}`}
                            onClick={() => handleMenuClick(2)}
                        >
                            <p> SẢN PHẨM </p>
                            <div className="header-menu-list-wrapper">
                                <ul className="header-menu-list-wrapper-item">
                                    <li>Giường ngủ</li>
                                    <li>Giường tầng</li>
                                    <li>Phụ kiện</li>
                                </ul>
                            </div>
                        </li> */}
                        <li
                            className={`header-menu-list-item ${isActive === 5 ? 'active' : null}`}
                            onClick={() => handleMenuClick(5)}
                        >
                            <Link to="/news" className="header-menu-list-item-link">
                                <p> TIN TỨC </p>
                            </Link>
                        </li>
                        <li
                            className={`header-menu-list-item ${isActive === 6 ? 'active' : null}`}
                            onClick={() => handleMenuClick(6)}
                        >
                            <Link to="/contact" className="header-menu-list-item-link">
                                <p> LIÊN HỆ </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <div className="header-right-item">
                        <FontAwesomeIcon icon={faSearch} className="header-right-item-icon" />
                        <div className="header-right-item-search">
                            <div className="header-right-item-search-content">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm ..."
                                    value={searchValue}
                                    onChange={(e) => {
                                        setSearchValue(e.target.value);
                                    }}
                                />
                                {searchValue ? (
                                    <div className="header-right-item-search-content-drop-down">
                                        {filteredProducts.map((item, index) => (
                                            <Link
                                                to={`/productDetail/${item.id}`}
                                                key={index}
                                                className="header-right-item-search-content-item d-flex"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <img src={item.thumbnail} alt="Products search img" />
                                                    <p>{item.name}</p>
                                                </div>
                                                <p>{item.price}</p>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div>Không có kết quả tìm kiếm</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="header-right-item">
                        <FontAwesomeIcon icon={faGlobe} className="header-right-item-icon" />
                        <div className="header-right-item-language">
                            <ul className="header-right-item-language-content">
                                <li>English</li>
                                <li>Vietnamese</li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-right-item">
                        <FontAwesomeIcon icon={faUser} className="header-right-item-icon" />
                        <div className="header-right-item-user">
                            <ul className="header-right-item-user-content">
                                <li onClick={() => setIsModalOpen(true)}>Log in</li>
                                <li>Log out</li>
                                {/* <ModalLogin open={true} onClose={() => {}} /> */}
                            </ul>
                        </div>
                    </div>
                    <div className="header-right-item bag">
                        <FontAwesomeIcon icon={faBagShopping} className="header-right-item-icon" />
                        <div className="bag-count">
                            <span>{productStorage ? productStorage.length : 0}</span>
                        </div>
                        <div className="header-right-item-bagShopping">
                            <div className="header-right-item-bagShopping-content">
                                {productStorage && productStorage.length > 0 ? (
                                    <>
                                        <div className="tippy-bag-item">
                                            {productStorage.map((item, index) => {
                                                return (
                                                    <div key={index} className="tippy-bag-product">
                                                        <img
                                                            src={item.image ? item.image : images.logokory2}
                                                            alt="avatar product"
                                                        />
                                                        <div className="tippy-bag-product-infor">
                                                            <h5>{item.name}</h5>
                                                            <p>
                                                                {item.quantity} x {numeral(+item.price).format('0,0')} đ
                                                            </p>
                                                        </div>
                                                        <FontAwesomeIcon
                                                            icon={faDeleteLeft}
                                                            className="icon"
                                                            onClick={() => {
                                                                handleDeleteProduct(item.id, index);
                                                            }}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="tippy-bag-total-price">
                                            <p>{`Tổng cộng: ${handleTotalProduct(productStorage)} đ`}</p>
                                        </div>
                                        <div className="tippy-bag-viewcard">
                                            <Link to="/cart">
                                                <button className="btn">viewcart</button>
                                            </Link>
                                        </div>
                                        <div className="tippy-bag-pay">
                                            <Link to="/pay">
                                                <button className="btn">pay</button>
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mobile header-right-item">
                        <div onClick={handleTonggleIcon}>
                            {iconn ? (
                                <FontAwesomeIcon icon={faBars} className="header-right-item-icon" />
                            ) : (
                                <FontAwesomeIcon icon={faTimes} className="header-right-item-icon" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="over-lay"></div>
            {isModalOpen && <ModalLogin open={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default Header;
