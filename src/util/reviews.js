// Đánh giá sản phẩm được lưu trong localStorage theo từng sản phẩm (key: reviews_<productId>)
const getReviewKey = (productId) => `reviews_${productId}`;

export const loadReviews = (productId) => {
    if (productId == null) return [];
    try {
        return JSON.parse(localStorage.getItem(getReviewKey(productId))) || [];
    } catch {
        return [];
    }
};

export const saveReviews = (productId, reviews) =>
    localStorage.setItem(getReviewKey(productId), JSON.stringify(reviews));

export const getAverageRating = (reviews) =>
    reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
