import './Pay.scss';
import { dataCart } from '../cart/dataCart';
import { useState, useEffect } from 'react';
import numeral from 'numeral';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Pay() {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [payMethod, setPayMethod] = useState(() => {
        const savedPayMethod = localStorage.getItem('pay_method');
        return savedPayMethod !== null ? savedPayMethod : 'vietcombank';
    });
    // useEffect(() => {
    //     const getUser = async (userID) => {
    //         const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getall-user?id=${userID}`);
    //         setFullName(res.data.users.fullName);
    //         setAddress(res.data.users.address);
    //         setPhone(res.data.users.phone);
    //         setEmail(res.data.users.email);
    //     };
    //     getUser(userID);
    // }, [userID]);
    useEffect(() => {
        localStorage.setItem('pay_method', payMethod);
    }, [payMethod]);
    const handleTotalPrice1Item = (quantity, price) => {
        const sum = price * quantity;
        return sum;
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
            return total;
        }
    };
    const handleOptionChange = (e) => {
        setPayMethod(e.target.value);
    };
    const navigate = useNavigate();
    // const handleOrder = (e) => {
    //     e.preventDefault();
    //     if (localStorage.getItem('userId') !== null) {
    //         let time = new Date();
    //         axios
    //             .post(`${process.env.REACT_APP_BACKEND_URL}/create-order`, {
    //                 userId: userID,
    //                 fullName: fullName,
    //                 address: address,
    //                 phone: phone,
    //                 email: email,
    //                 note: note,
    //                 dataProduct: productStorage,
    //                 orderDate: time,
    //                 totalMoney: handleTotalProduct(productStorage),
    //             })
    //             .then((res) => {
    //                 if (payMethod === 'tienmat') {
    //                     navigate('/pay/payMethod2');
    //                 } else {
    //                     navigate('/pay/payMethod');
    //                 }
    //             })
    //             .catch((error) => console.log(error));
    //     } else {
    //         alert('Bạn phải đăng nhập trước');
    //     }
    // };

    return (
        <>
            {dataCart && dataCart.length > 0 ? (
                <div className="pay container">
                    <div className="pay-container row">
                        <div className="pay-container-left col-lg-7">
                            <h1>THÔNG TIN THANH TOÁN</h1>
                            <form>
                                <div className="pay-container-left-fullName">
                                    <div className="pay-container-left-firstName">
                                        <p>Name</p>
                                        <input
                                            type="text"
                                            required
                                            value={fullName}
                                            onChange={(e) => {
                                                setFullName(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="pay-container-left-item">
                                    <p>Address</p>
                                    <input
                                        type="text"
                                        required
                                        value={address}
                                        onChange={(e) => {
                                            setAddress(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="pay-container-left-item">
                                    <p>Phone Number</p>
                                    <input
                                        type="text"
                                        required
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="pay-container-left-item">
                                    <p>Email</p>
                                    <input
                                        type="text"
                                        required
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="pay-container-left-item">
                                    <p>Ghi chú</p>
                                    <textarea
                                        rows="20"
                                        required
                                        type="text"
                                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                                        value={note}
                                        onChange={(e) => {
                                            setNote(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="pay-container-right-inner-order">
                                    <button
                                        type="submit"
                                        // onClick={(e) => {
                                        //     handleOrder(e);
                                        // }}
                                    >
                                        Đặt hàng
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="pay-container-right col-lg-4">
                            <div className="pay-container-right-inner">
                                <h3>ĐƠN HÀNG CỦA BẠN</h3>
                                <hr />
                                <div className="pay-container-right-inner-productTotal">
                                    <p>SẢN PHẨM</p>
                                    <p>
                                        <b>TỔNG CỘNG</b>
                                    </p>
                                </div>
                                {dataCart.map((item, index) => {
                                    return (
                                        <div key={index} className="pay-container-right-inner-product">
                                            <p>
                                                {item.title} × {item.quantity}
                                            </p>
                                            <h5>
                                                <b>
                                                    {numeral(handleTotalPrice1Item(item.quantity, item.price)).format(
                                                        '0,0',
                                                    )}{' '}
                                                    đ
                                                </b>
                                            </h5>
                                        </div>
                                    );
                                })}
                                <div className="pay-container-right-inner-total">
                                    <p>Tổng cộng</p>
                                    <h5>
                                        <b>{numeral(handleTotalProduct(dataCart)).format('0,0')} đ</b>
                                    </h5>
                                </div>
                                <div className="pay-container-right-inner-total">
                                    <p>Phương thức thanh toán</p>
                                    <select value={payMethod} onChange={handleOptionChange}>
                                        <option value="vietcombank">Vietcombank</option>
                                        <option value="momo">Quét mã Momo</option>
                                        <option value="tienmat">Tiền mặt</option>
                                    </select>
                                </div>
                                <p className="pay-container-right-inner-text">
                                    Cảm ơn quý khách đã tin tưởng và ủng hộ kory shop. Kính chúc quý khách có một ngày
                                    tốt lành. Nếu cần tư vấn bất kì điều gì xin hãy liên hệ với chúng tôi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>No Product</div>
            )}
        </>
    );
}

export default Pay;
