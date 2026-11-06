import './ProductList.scss';
import { useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import CategoryMenu from '../categoryMenu/CategoryMenu';
import PriceFilter from '../priceFilter/PriceFilter';
import FeaturedProducts from '../featuredProducts/FeaturedProducts';
import ProductCard from '../productCard/ProductCard';
import ContactButton from '../contactButton/ContactButton';
import Pagination from '../pagination/Pagination';
import { handleAddProduct } from '../../util/index';

const PRODUCTS_PER_PAGE = 6;
// Tạm thời: dữ liệu mỗi danh mục còn ít, nên lặp lại các sản phẩm đầu cho đủ MIN_PRODUCTS để demo phân trang.
// Khi có đủ dữ liệu thật (hoặc có BE) thì xoá padProducts.
const MIN_PRODUCTS = 9;
const padProducts = (list) =>
    list.length && list.length < MIN_PRODUCTS
        ? Array.from({ length: MIN_PRODUCTS }, (_, i) => list[i % list.length])
        : list;

function ProductList({ category, products: rawProducts, render }) {
    const products = padProducts(rawProducts);
    const { name, minPrice, maxPrice } = category;
    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice);
    const [searchParams, setSearchParams] = useSearchParams();
    const contentRef = useRef(null);
    const navigate = useNavigate();

    const filteredProducts = products.filter(
        (product) => product.salePrice >= minValue && product.salePrice <= maxValue,
    );

    // Trang hiện tại lấy từ URL (?page=2), giới hạn trong khoảng hợp lệ
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
    const currentPage = Math.min(Math.max(Number(searchParams.get('page')) || 1, 1), totalPages);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const pageProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    const setPage = (page, options) => {
        setSearchParams(page > 1 ? { page: String(page) } : {}, options);
    };

    const handlePageChange = (page) => {
        setPage(page);
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handlePriceChange = (min, max) => {
        // Slider gọi onInput cả khi vừa render, nên chỉ quay về trang 1 khi giá thực sự thay đổi
        if (min === minValue && max === maxValue) return;
        setMinValue(min);
        setMaxValue(max);
        if (currentPage !== 1) setPage(1, { replace: true });
    };

    const handleViewDetail = (product) => {
        navigate(`/productDetail/${product.id}`);
        render();
    };

    return (
        <div className="product-list container">
            <div className="product-list-container">
                <div className="product-list-sidebar">
                    <div className="product-list-breadcrumb">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1 className="product-list-breadcrumb-home">TRANG CHỦ</h1>
                        </Link>
                        <span>/</span>
                        <h1 className="product-list-breadcrumb-current">{name}</h1>
                    </div>
                    <CategoryMenu />
                    <PriceFilter
                        min={minPrice}
                        max={maxPrice}
                        minValue={minValue}
                        maxValue={maxValue}
                        onChange={handlePriceChange}
                    />
                    <FeaturedProducts />
                </div>
                <div className="product-list-content" ref={contentRef}>
                    {pageProducts.length ? (
                        <>
                            <p className="product-list-result">
                                Hiển thị {startIndex + 1}–{startIndex + pageProducts.length} trong{' '}
                                {filteredProducts.length} sản phẩm
                            </p>
                            <div className="product-list-grid">
                                {pageProducts.map((product, index) => (
                                    <ProductCard
                                        key={`${product.id}-${startIndex + index}`}
                                        product={product}
                                        onAddToCart={(item) => handleAddProduct(item, render)}
                                        onViewDetail={handleViewDetail}
                                    />
                                ))}
                            </div>
                            <div className="product-list-pagination">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onChange={handlePageChange}
                                />
                            </div>
                        </>
                    ) : (
                        <p className="product-list-empty">Không có sản phẩm nào phù hợp với khoảng giá đã chọn.</p>
                    )}
                </div>
            </div>
            <ContactButton />
        </div>
    );
}

export default ProductList;
