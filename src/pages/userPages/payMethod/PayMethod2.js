import './PayMethod.scss';
import images from '../../../asset/image/index';
import numeral from 'numeral';

function PayMethod2() {
    const productStorage = JSON.parse(localStorage.getItem('products'));
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
    // Tạo một số ngẫu nhiên có giá trị từ 0 đến 9999
    const randomNumber = Math.floor(Math.random() * 10000);
    // Đảm bảo số có đủ 4 chữ số bằng cách thêm các số 0 ở đầu nếu cần
    const randomFourDigitNumber = String(randomNumber).padStart(4, '0');
    // Tạo một đối tượng Date đại diện cho thời điểm hiện tại
    const currentDate = new Date();
    // Lấy thông tin ngày, tháng và năm
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return (
        <div className="payMethod">
            <div className="container">
                <div className="payMethod-header">
                    <h1>HOÀN THÀNH</h1>
                </div>
                <div className="content">
                    <div className="left">
                        <img src={images.thankcute} alt="thank cute" style={{ width: '70%' }} />
                    </div>
                    <div className="right">
                        <div className="right-container">
                            <div className="right-content">
                                <h4>
                                    <b>
                                        <p>Cảm ơn bạn!</p>
                                    </b>
                                    <b>
                                        <p>Đơn hàng của bạn đã được nhận.</p>
                                    </b>
                                </h4>
                                <ul>
                                    <li>
                                        Mã đơn hàng: <b>KORYPET {randomFourDigitNumber}</b>
                                    </li>
                                    <li>
                                        Ngày: <b>{`${day} tháng ${month} năm ${year}`}</b>
                                    </li>
                                    <li>
                                        Tổng cộng: <b>{handleTotalProduct(productStorage)} VND</b>
                                    </li>
                                    <li>
                                        Phương thức thanh toán: <strong>Tiền mặt</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayMethod2;
