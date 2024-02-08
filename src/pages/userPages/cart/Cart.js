import './Cart.scss';
import images from '../../../asset/image/index';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faTag, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { dataCart } from './dataCart';
import numeral from 'numeral';

function Cart({ render }) {
    const productStorage = JSON.parse(localStorage.getItem('products'));
    const [state, setState] = useState(0);
    const handleTotalProduct = (data) => {
        const arr = [];
        if (data && data.length > 0) {
            data.forEach((item) => {
                arr.push(item.price * item.quantity);
            });
            const total = arr.reduce((a, b) => {
                return a + b;
            });
            return total;
        }
    };
    const handleTotalPrice1Item = (quantity, price) => {
        const sum = price * quantity;
        // const formattedTotal = numeral(sum).format('0,0');
        return sum;
    };
    const handleDeleteProduct = (id, index, render) => {
        let arr = [...productStorage];
        const exits = productStorage.find((product) => {
            return product.id === id;
        });
        if (exits) {
            arr = [...arr.slice(0, index), ...arr.slice(index + 1)];
            localStorage.setItem('products', JSON.stringify(arr));
            setState(state + 1);
        }
        render();
    };
    const handleUpdateQuantity = (action, id, render) => {
        let arr = [...productStorage];
        if (arr.length > 0) {
            arr.forEach((item, index) => {
                if (item.id === id) {
                    if (action === 'increase') {
                        return (arr[index].quantity = item.quantity + 1);
                    } else {
                        if (item.quantity === 1) {
                            return (arr = [...arr.slice(0, index), ...arr.slice(index + 1)]);
                        } else {
                            return (arr[index].quantity = item.quantity - 1);
                        }
                    }
                }
            });
            localStorage.setItem('products', JSON.stringify(arr));
        }
        setState(state + 1);
        render();
    };

    return (
        <div className="container">
            {dataCart && dataCart.length !== 0 ? (
                <div className="shoppingCart ">
                    <div className="shoppingCart-container row">
                        <div className="shoppingCart-left col-lg-7 ">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                {productStorage.map((item, index) => {
                                    return (
                                        <tbody key={index}>
                                            <tr>
                                                <td className="product">
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                        className="icon"
                                                        onClick={() => {
                                                            handleDeleteProduct(item.id, index, render);
                                                        }}
                                                    />
                                                    <img src={item.image} alt="avatar" />
                                                    <p>{item.title}</p>
                                                </td>
                                                <td>
                                                    <p>
                                                        {numeral(+item.price).format('0,0')}
                                                        {/* {item.price} */}
                                                        <b>đ</b>
                                                    </p>
                                                </td>
                                                <td className="quantity">
                                                    <div className="quantity-item">
                                                        <div
                                                            onClick={() =>
                                                                handleUpdateQuantity('increase', item.id, render)
                                                            }
                                                            className="quantity-item-icon"
                                                        >
                                                            +
                                                        </div>
                                                        <p>{item.quantity}</p>
                                                        {/* <p>{item.quantity}</p> */}
                                                        <div
                                                            onClick={() =>
                                                                handleUpdateQuantity('decrease', item.id, render)
                                                            }
                                                            className="quantity-item-icon"
                                                        >
                                                            -
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {numeral(
                                                        +` ${handleTotalPrice1Item(item.quantity, item.price)}`,
                                                    ).format('0,0')}
                                                    {/* {` ${handleTotalPrice1Item(item.quantity, item.price)}`} */}
                                                    <b>đ</b>
                                                </td>
                                            </tr>
                                        </tbody>
                                    );
                                })}
                            </table>
                            <div className="shoppingCart-left-footer">
                                <div className="shoppingCart-left-footer-btn">
                                    <FontAwesomeIcon icon={faArrowLeftLong} className="icon" />
                                    <Link to="/" className="text-decoration-none">
                                        <p>Continue to view products</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="shoppingCart-right col-lg-4 ">
                            <h5>Total Quantity</h5>
                            <div className="shoppingCart-right-total">
                                <p>ToTal</p>
                                <p>
                                    <b>
                                        {numeral(+` ${handleTotalProduct(productStorage)}`).format('0,0')}
                                        <b>đ</b>
                                    </b>
                                </p>
                            </div>
                            <Link to="/pay" className="text-decoration-none">
                                <div className="shoppingCart-right-btn">
                                    <p>Pay</p>
                                </div>
                            </Link>
                            <div className="shoppingCart-right-discount">
                                <FontAwesomeIcon icon={faTag} className="icon" />
                                <p>
                                    <b>Discount code</b>
                                </p>
                            </div>
                            <div className="shoppingCart-right-discount-input">
                                <input type="text" placeholder="Mã ưu đãi" />
                            </div>
                            <div className="shoppingCart-right-discount-btn">
                                <p>Apply</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>No product</div>
            )}
        </div>
    );
}

export default Cart;
