import './StarRating.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { getAverageRating, loadReviews } from '../../util/reviews';

// Hiển thị 5 sao; truyền onChange để cho phép chọn số sao
export function Stars({ value, onChange }) {
    return (
        <span className={`star-rating-stars${onChange ? ' selectable' : ''}`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                    key={star}
                    icon={star <= value ? faStar : faStarRegular}
                    onClick={onChange ? () => onChange(star) : undefined}
                />
            ))}
        </span>
    );
}

// Sao đánh giá trung bình của 1 sản phẩm, dùng cho các thẻ/danh sách sản phẩm
function ProductRating({ productId, showCount = true, className = '' }) {
    const reviews = loadReviews(productId);
    const average = getAverageRating(reviews);

    return (
        <div className={`product-rating ${className}`} title={`${average.toFixed(1)}/5 - ${reviews.length} đánh giá`}>
            <Stars value={Math.round(average)} />
            {showCount && <span className="product-rating-count">({reviews.length})</span>}
        </div>
    );
}

export default ProductRating;
