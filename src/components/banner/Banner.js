import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.scss';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="object-fill w-full h-screen banner1">
                        <div className="banner-content">
                            <h1>
                                <span style={{ color: '#2da4d6' }}>SILK</span> BED LINEN
                            </h1>
                            <p>For the ultimate luxury sleeping experience</p>
                            <Link to="/dog" style={{ textDecoration: 'none' }}>
                                <button type="button" className="btn">
                                    MUA NGAY
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="object-fill w-full h-screen banner2">
                        <div className="banner-content">
                            <div className="banner-content-title">
                                <h3>The Better</h3>
                                <h2>MATTRESES</h2>
                                <p>For the ultimate luxury sleeping experience</p>
                                <Link to="/food" style={{ textDecoration: 'none' }}>
                                    <button type="button" className="btn">
                                        MUA NGAY
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="object-fill w-full h-screen banner3">
                        <div className="banner-content">
                            <h1>
                                <span style={{ color: '#2da4d6' }}>SILK</span> BED LINEN
                            </h1>
                            <p>For the ultimate luxury sleeping experience</p>
                            <Link to="/dog" style={{ textDecoration: 'none' }}>
                                <button type="button" className="btn">
                                    MUA NGAY
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Banner;
