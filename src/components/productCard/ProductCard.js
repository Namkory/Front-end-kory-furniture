import './ProductCard.scss';
import numeral from 'numeral';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import ProductRating from '../starRating/StarRating';

function ProductCard({ product, onAddToCart, onViewDetail }) {
    return (
        <Card className="product-card">
            <div className="product-card-top">
                <Card.Img
                    variant="top"
                    className="card-img product-card-img"
                    src={product.thumbnailData?.[0]}
                    alt={product.name}
                />
                <div className="product-card-btn product-card-btn--add">
                    <button type="button" className="btn" onClick={() => onAddToCart(product)}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
                <div className="product-card-btn product-card-btn--detail">
                    <button type="button" className="btn" onClick={() => onViewDetail(product)}>
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </button>
                </div>
            </div>
            <Card.Body className="product-card-body">
                <Card.Title className="product-card-title">{product.name}</Card.Title>
                <ProductRating productId={product.id} className="product-card-rating" />
                <Card.Text className="product-card-price">
                    {numeral(+product.salePrice).format('0,0')}
                    <b>
                        <u>đ</u>
                    </b>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
