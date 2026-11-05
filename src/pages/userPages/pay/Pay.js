import './Pay.scss';
import { useState, useEffect } from 'react';
import numeral from 'numeral';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactButton from '../../../components/contactButton/ContactButton';
import { toast } from 'react-toastify';

function Pay() {
    const [data, setData] = useState({});
    const productStorage = JSON.parse(localStorage.getItem('products'));
    const userId = localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')).id : null;
    const [payMethod, setPayMethod] = useState(() => {
        const savedPayMethod = localStorage.getItem('pay_method');
        return savedPayMethod !== null ? savedPayMethod : 'vietcombank';
    });
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
    const handleCreatePayment = (e) => {
        e.preventDefault();
        if (!userId) {
            toast.error('Bạn phải đăng nhập trước');
        }
    };

    return (
        <>
            {productStorage && productStorage.length > 0 ? (
                <div className="pay container">
                    <div className="pay-container row">
                        <div className="pay-container-left col-lg-7">
                            <h1>THÔNG TIN THANH TOÁN</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        value={data.fullName}
                                        onChange={(e) => {
                                            setData({ ...data, fullName: e.target.value });
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) => {
                                            setData({ ...data, email: e.target.value });
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={data.address}
                                        onChange={(e) => {
                                            setData({ ...data, address: e.target.value });
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        value={data.phoneNumber}
                                        onChange={(e) => {
                                            setData({ ...data, phoneNumber: e.target.value });
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="note">
                                    <Form.Label>Note</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        id="note"
                                        name="note"
                                        onChange={(e) => {
                                            setData({ ...data, note: e.target.value });
                                        }}
                                    />
                                </Form.Group>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#30b5b2', borderColor: '#30b5b2' }}
                                    onClick={(e) => {
                                        handleCreatePayment(e);
                                    }}
                                >
                                    Submit
                                </Button>
                            </Form>
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
                                {productStorage.map((item, index) => {
                                    return (
                                        <div key={index} className="pay-container-right-inner-product">
                                            <p>
                                                {item.name} × {item.quantity}
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
                                        <b>{numeral(handleTotalProduct(productStorage)).format('0,0')} đ</b>
                                    </h5>
                                </div>
                                <div className="pay-container-right-inner-total">
                                    <p>Phương thức thanh toán</p>
                                    <select value={payMethod} onChange={handleOptionChange}>
                                        <option value="vietcombank">VNPay</option>
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
            <ContactButton />
        </>
    );
}

export default Pay;
