import './ProductList.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategoryMenu from '../categoryMenu/CategoryMenu';
import PriceFilter from '../priceFilter/PriceFilter';
import FeaturedProducts from '../featuredProducts/FeaturedProducts';
import ProductCard from '../productCard/ProductCard';
import ContactButton from '../contactButton/ContactButton';
import { handleAddProduct } from '../../util/index';

function ProductList({ category, products, render }) {
    const { name, minPrice, maxPrice } = category;
    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice);
    const navigate = useNavigate();

    const filteredProducts = products.filter(
        (product) => product.salePrice >= minValue && product.salePrice <= maxValue,
    );

    const handlePriceChange = (min, max) => {
        setMinValue(min);
        setMaxValue(max);
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
                <div className="product-list-content">
                    <div className="product-list-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={(item) => handleAddProduct(item, render)}
                                onViewDetail={handleViewDetail}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ContactButton />
        </div>
    );
}

export default ProductList;
