import './Pay.scss';
import { dataCart } from '../cart/dataCart';
import { useState, useEffect } from 'react';
import numeral from 'numeral';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Pay() {
    const productStorage = JSON.parse(localStorage.getItem('products'));
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
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
    const handleOrder = (data) => {
        console.log('data', data);
    };

    return (
        <>
            {productStorage && productStorage.length > 0 ? (
                <div className="pay container">
                    <div className="pay-container row">
                        <div className="pay-container-left col-lg-7">
                            <h1>THÔNG TIN THANH TOÁN</h1>
                            <Form onSubmit={handleSubmit(handleOrder)}>
                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        {...register('fullName', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.fullName && <p>Username is required</p>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        name="email"
                                        {...register('email', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.email && <p>Email is required</p>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="address"
                                        name="address"
                                        {...register('address', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.address && <p>Address is required</p>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        {...register('phone', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.phone && <p>Phone is required</p>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="note">
                                    <Form.Label>Note</Form.Label>
                                    <Form.Control as="textarea" rows={3} id="note" name="note" {...register('note')} />
                                </Form.Group>
                                <Button type="submit" style={{ backgroundColor: '#30b5b2', borderColor: '#30b5b2' }}>
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
