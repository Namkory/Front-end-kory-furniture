import './ProductTabs.scss';
import { useState } from 'react';
import numeral from 'numeral';
import { Stars } from '../../../components/starRating/StarRating';
import { getAverageRating } from '../../../util/reviews';

export const TAB_KEYS = { description: 'description', reviews: 'reviews' };
const TABS = [
    { key: TAB_KEYS.description, label: 'MÔ TẢ' },
    { key: TAB_KEYS.reviews, label: 'ĐÁNH GIÁ' },
];

const HIGHLIGHTS = [
    'Chất liệu được tuyển chọn kỹ lưỡng, an toàn cho sức khỏe cả gia đình.',
    'Thiết kế hiện đại, dễ dàng phối hợp với nhiều phong cách nội thất.',
    'Kết cấu chắc chắn, chịu lực tốt, đảm bảo độ bền khi sử dụng lâu dài.',
    'Bề mặt hoàn thiện tỉ mỉ, dễ vệ sinh và bảo quản.',
];

function DescriptionTab({ product, image }) {
    const categoryName = product.category?.name || 'Nội thất';
    const specs = [
        ['Danh mục', categoryName],
        ['Kích thước', product.size],
        ['Giá niêm yết', product.establishedPrice && `${numeral(product.establishedPrice).format('0,0')}đ`],
        ['Tình trạng', product.amount > 0 ? 'Còn hàng' : 'Hết hàng'],
    ].filter(([, value]) => value);

    return (
        <div className="product-tabs-description">
            <h2>
                {product.name} – {product.description?.toLowerCase()}, bền đẹp theo thời gian
            </h2>
            <p>
                {product.name} thuộc dòng sản phẩm {categoryName.toLowerCase()} của Kory Furniture, mang đến sự kết
                hợp hài hòa giữa thẩm mỹ và công năng, giúp không gian sống của bạn trở nên tiện nghi và ấm cúng hơn.
            </p>
            <img src={image} alt={product.name} />
            <h3>Điểm nổi bật</h3>
            <ul>
                {HIGHLIGHTS.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <h3>Thông số sản phẩm</h3>
            <table>
                <tbody>
                    {specs.map(([label, value]) => (
                        <tr key={label}>
                            <th>{label}</th>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ReviewsTab({ reviews, onSubmit }) {
    const [rating, setRating] = useState(5);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const average = getAverageRating(reviews);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !content.trim()) {
            setError('Vui lòng nhập tên và nội dung đánh giá.');
            return;
        }
        onSubmit({ rating, name: name.trim(), content: content.trim(), createdAt: new Date().toLocaleDateString('vi-VN') });
        setRating(5);
        setName('');
        setContent('');
        setError('');
    };

    return (
        <div className="product-tabs-reviews">
            <div className="product-tabs-reviews-summary">
                <span className="average">{average.toFixed(1)}</span>
                <div>
                    <Stars value={Math.round(average)} />
                    <p>{reviews.length} đánh giá</p>
                </div>
            </div>

            {reviews.length ? (
                <ul className="product-tabs-reviews-list">
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <div className="review-header">
                                <b>{review.name}</b>
                                <span className="review-date">{review.createdAt}</span>
                            </div>
                            <Stars value={review.rating} />
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="product-tabs-reviews-empty">Chưa có đánh giá nào. Hãy là người đầu tiên đánh giá sản phẩm này!</p>
            )}

            <form className="product-tabs-reviews-form" onSubmit={handleSubmit}>
                <h3>Viết đánh giá của bạn</h3>
                <div className="form-rating">
                    <span>Đánh giá:</span>
                    <Stars value={rating} onChange={setRating} />
                </div>
                <input placeholder="Tên của bạn" value={name} onChange={(e) => setName(e.target.value)} />
                <textarea
                    rows={4}
                    placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                {error && <p className="form-error">{error}</p>}
                <button type="submit">Gửi đánh giá</button>
            </form>
        </div>
    );
}

function ProductTabs({ product, image, reviews, onAddReview, activeTab, onChangeTab }) {
    return (
        <div className="product-tabs" id="product-tabs">
            <div className="product-tabs-header">
                {TABS.map((tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        className={`product-tabs-header-item${activeTab === tab.key ? ' active' : ''}`}
                        onClick={() => onChangeTab(tab.key)}
                    >
                        {tab.label}
                        {tab.key === TAB_KEYS.reviews && ` (${reviews.length})`}
                    </button>
                ))}
            </div>
            <div className="product-tabs-content">
                {activeTab === TAB_KEYS.description ? (
                    <DescriptionTab product={product} image={image} />
                ) : (
                    <ReviewsTab reviews={reviews} onSubmit={onAddReview} />
                )}
            </div>
        </div>
    );
}

export default ProductTabs;
