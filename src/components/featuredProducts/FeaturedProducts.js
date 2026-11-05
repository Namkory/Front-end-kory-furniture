import './FeaturedProducts.scss';
import numeral from 'numeral';
import { productDetail } from '../../pages/userPages/productDetail/ProductData';

function FeaturedProducts({ limit = 5 }) {
    return (
        <div className="featured-products">
            <div className="featured-products-title">SẢN PHẨM</div>
            <div className="featured-products-list">
                {productDetail.slice(0, limit).map((item) => (
                    <div key={item.id} className="featured-products-item">
                        <img src={item.linkImg} alt={item.title} className="featured-products-avatar" />
                        <div>
                            <p>{item.title}</p>
                            <p>
                                <b>
                                    {numeral(+item.price).format('0,0')}
                                    <u>đ</u>
                                </b>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;
