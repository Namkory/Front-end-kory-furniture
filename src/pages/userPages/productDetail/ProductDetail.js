import './ProductDetail.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { productDetail } from './ProductData';
import { fakeData1, fakeData2, fakeData3 } from '../../../util/Data';
import images from '../../../asset/image/index';
import ContactButton from '../../../components/contactButton/ContactButton';

const allProducts = [...fakeData1, ...fakeData2, ...fakeData3];
const GALLERY_SIZE = 5;
const ZOOM_LEVEL = 3; // ảnh trong khung zoom phóng to gấp 3 lần, lens = 1/3 kích thước ảnh chính

// Tạo danh sách ảnh cho gallery: dùng thumbnailData, thiếu thì lặp lại ảnh chính cho đủ GALLERY_SIZE
const buildGallery = (product) => {
    const thumbnails = product.thumbnailData?.length ? product.thumbnailData : [images.noImg];
    return Array.from({ length: Math.max(GALLERY_SIZE, thumbnails.length) }, (_, i) => thumbnails[i] || thumbnails[0]);
};

function ProductDetail({ render }) {
    const { id } = useParams();
    const userId = 1;
    const [quantity, setQuantity] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    const thumbsRef = useRef(null);
    const dataProduct = allProducts.find((item) => item.id === Number(id)) || {};
    const gallery = buildGallery(dataProduct);
    const productImage = gallery[0];

    useEffect(() => {
        setActiveIndex(0);
        setQuantity(1);
    }, [id]);

    useEffect(() => {
        // Cuộn danh sách thumbnail (chỉ theo chiều ngang) để ảnh đang chọn luôn nằm trong khung nhìn
        const list = thumbsRef.current;
        const activeThumb = list?.children[activeIndex];
        if (!activeThumb) return;
        const left = activeThumb.offsetLeft - (list.clientWidth - activeThumb.clientWidth) / 2;
        list.scrollTo({ left, behavior: 'smooth' });
    }, [activeIndex]);

    const handleChangeImage = (step) => {
        setActiveIndex((prev) => (prev + step + gallery.length) % gallery.length);
    };

    // Zoom khi hover: tính vị trí lens và background của khung zoom theo vị trí chuột
    const [zoom, setZoom] = useState(null);
    const handleZoomMove = (e) => {
        const img = e.currentTarget.querySelector('img');
        if (!img?.naturalWidth) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const { width, height } = rect;
        const lensW = width / ZOOM_LEVEL;
        const lensH = height / ZOOM_LEVEL;
        const clamp = (value, max) => Math.min(Math.max(value, 0), max);
        const lensX = clamp(e.clientX - rect.left - lensW / 2, width - lensW);
        const lensY = clamp(e.clientY - rect.top - lensH / 2, height - lensH);

        // Ảnh chính dùng object-fit: cover nên cần tính kích thước & độ lệch thực tế của ảnh đang hiển thị
        const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
        const renderW = img.naturalWidth * scale;
        const renderH = img.naturalHeight * scale;
        const offsetX = (width - renderW) / 2;
        const offsetY = (height - renderH) / 2;

        setZoom({
            lens: { left: lensX, top: lensY, width: lensW, height: lensH },
            backgroundSize: `${renderW * ZOOM_LEVEL}px ${renderH * ZOOM_LEVEL}px`,
            backgroundPosition: `${-(lensX - offsetX) * ZOOM_LEVEL}px ${-(lensY - offsetY) * ZOOM_LEVEL}px`,
        });
    };
    const handleUpdateQuantity = (action) => {
        if (action === 'increase') {
            setQuantity(quantity + 1);
        } else if (action === 'decrease') {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    };
    const navigate = useNavigate();
    const handleAddNewProduct = async (data) => {
        const dataLocal = await JSON.parse(localStorage.getItem('products'));
        if (dataLocal) {
            const exits = dataLocal.find((item) => {
                return item.id === data.id;
            });
            if (exits) {
                dataLocal.forEach((item) => {
                    if (item.id === data.id) {
                        return (item.quantity = item.quantity + quantity);
                    }
                });
                localStorage.setItem('products', JSON.stringify(dataLocal));
            } else {
                localStorage.setItem(
                    'products',
                    JSON.stringify([
                        ...dataLocal,
                        {
                            id: data.id,
                            name: data.name,
                            image: productImage,
                            quantity: quantity,
                            price: data.salePrice,
                        },
                    ]),
                );
            }
        } else {
            localStorage.setItem(
                'products',
                JSON.stringify([
                    { id: data.id, name: data.name, image: productImage, quantity: quantity, price: data.salePrice },
                ]),
            );
        }
        navigate('/');
        render();
    };

    return (
        <>
            {userId ? (
                <div className="productDetail container">
                    <div className="productDetail-container">
                        <div className="row">
                            <div className="productDetail-left col-12 col-lg-4 order-2 order-lg-1">
                                <div className="productDetail-left-products-title">SẢN PHẨM</div>
                                <div className="productDetail-left-products">
                                    {productDetail.slice(0, 5).map((item, index) => {
                                        return (
                                            <div key={index} className="productDetail-left-products-item">
                                                <img src={item.linkImg} alt="avatar product" className="avatar" />
                                                <div className="productDetail-left-products-item-infor">
                                                    <p className="title">{item.title}</p>
                                                    <p>
                                                        <b>
                                                            {numeral(item.price).format('0,0')}
                                                            <u>đ</u>
                                                        </b>
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="productDetail-right col-12 col-lg-7 order-1 order-lg-2">
                                <div className="wrapper-right-productDetail">
                                    <div className="productDetail-right-img">
                                        <div
                                            className="productDetail-zoom"
                                            onMouseMove={handleZoomMove}
                                            onMouseLeave={() => setZoom(null)}
                                        >
                                            <img
                                                src={gallery[activeIndex]}
                                                alt={dataProduct.name}
                                                className="productDetail-right-img-main"
                                            />
                                            {zoom && (
                                                <>
                                                    <div className="productDetail-zoom-lens" style={zoom.lens} />
                                                    <div
                                                        className="productDetail-zoom-result"
                                                        style={{
                                                            backgroundImage: `url(${gallery[activeIndex]})`,
                                                            backgroundSize: zoom.backgroundSize,
                                                            backgroundPosition: zoom.backgroundPosition,
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </div>
                                        <div className="productDetail-gallery">
                                            <button
                                                type="button"
                                                className="productDetail-gallery-arrow prev"
                                                onClick={() => handleChangeImage(-1)}
                                                aria-label="Ảnh trước"
                                            >
                                                <FontAwesomeIcon icon={faChevronLeft} />
                                            </button>
                                            <div className="productDetail-gallery-list" ref={thumbsRef}>
                                                {gallery.map((src, index) => (
                                                    <div
                                                        key={index}
                                                        className={`productDetail-gallery-item${
                                                            index === activeIndex ? ' active' : ''
                                                        }`}
                                                        onClick={() => setActiveIndex(index)}
                                                    >
                                                        <img src={src} alt={`${dataProduct.name} ${index + 1}`} />
                                                    </div>
                                                ))}
                                            </div>
                                            <button
                                                type="button"
                                                className="productDetail-gallery-arrow next"
                                                onClick={() => handleChangeImage(1)}
                                                aria-label="Ảnh sau"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="productDetail-right-infor">
                                        <div className="productDetail-right-header">
                                            <Link to="/" style={{ textDecoration: 'none' }}>
                                                <h1 className="productDetail-right-header-home">TRANG CHỦ</h1>
                                            </Link>
                                            <span>/</span>
                                            <h1 className="productDetail-right-header-dog">GIƯỜNG NGỦ</h1>
                                        </div>
                                        <div className="productDetail-right-title">
                                            <h1>{dataProduct.name}</h1>
                                        </div>
                                        <h1>{numeral(dataProduct.salePrice).format('0,0')}đ</h1>
                                        <p>{dataProduct.description}</p>
                                        <div className="productDetail-right-infor-footer">
                                            <div className="quantity-item">
                                                <div
                                                    onClick={() => handleUpdateQuantity('increase')}
                                                    className="quantity-item-icon"
                                                >
                                                    +
                                                </div>
                                                <p>{quantity}</p>
                                                <div
                                                    onClick={() => handleUpdateQuantity('decrease')}
                                                    className="quantity-item-icon"
                                                >
                                                    -
                                                </div>
                                            </div>
                                            <div className="productDetail-right-infor-footer-btn">
                                                <p onClick={() => handleAddNewProduct(dataProduct)}>Add to cart</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactButton />
                </div>
            ) : (
                <div className="emty">
                    <h3>Bạn phải đăng nhập để xem chi tiết sản phẩm</h3>
                </div>
            )}
        </>
    );
}

export default ProductDetail;
