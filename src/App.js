import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/userPages/home/Home';
import Layout from './layout/Layout';
import Intro from './pages/userPages/intro/Intro';
import Bed from './pages/userPages/bed/Bed';
import Bunk from './pages/userPages/bunk/Bunk';
import Accessory from './pages/userPages/accessory/Accessory';
import News from './pages/userPages/news/News';
import Contact from './pages/userPages/contact/Contact';
import Cart from './pages/userPages/cart/Cart';
import Pay from './pages/userPages/pay/Pay';
import ProductDetail from './pages/userPages/productDetail/ProductDetail';
import LayoutAdmin from './layoutAdmin/LayoutAdmin';
import Dashboard from './pages/adminPages/dashboard/Dashboard';
import Customers from './pages/adminPages/customers/Customers';
import Products from './pages/adminPages/products/Products';
import Orders from './pages/adminPages/orders/Orders';
import Analytics from './pages/adminPages/analytics/Analytics';
import NewCustomer from './pages/adminPages/newCustomer/NewCustomer';
import NewProduct from './pages/adminPages/newProduct/NewProduct';
import { useState } from 'react';
import ErrorPage from './components/errorPage/ErrorPage';
import PayMethod from './pages/userPages/payMethod/PayMethod';
import PayMethod2 from './pages/userPages/payMethod/PayMethod2';
import { PageMeta } from './util/seo';

// Title / description cho từng trang (trang chi tiết sản phẩm tự đặt meta theo sản phẩm)
const SEO = {
    home: {},
    intro: {
        title: 'Giới thiệu',
        description:
            'Giới thiệu Kory Furniture - thương hiệu nội thất phòng ngủ với giường ngủ, giường tầng, nệm và chăn ga gối chất lượng, thiết kế hiện đại.',
    },
    bed: {
        title: 'Giường ngủ',
        description:
            'Mua giường ngủ đẹp, hiện đại tại Kory Furniture: giường gỗ, giường bọc nệm, giường cao cấp nhiều kích thước, giá tốt, giao hàng tận nơi.',
    },
    bunkbed: {
        title: 'Giường tầng',
        description:
            'Giường tầng cho bé và gia đình tại Kory Furniture: giường tầng gỗ, giường tầng sắt chắc chắn, an toàn, tiết kiệm không gian.',
    },
    accessory: {
        title: 'Phụ kiện phòng ngủ',
        description:
            'Phụ kiện phòng ngủ tại Kory Furniture: chăn ga gối, nệm, drap và đồ trang trí giúp phòng ngủ thêm ấm cúng, tiện nghi.',
    },
    news: {
        title: 'Tin tức',
        description: 'Tin tức, kinh nghiệm chọn giường ngủ, nệm và mẹo trang trí phòng ngủ từ Kory Furniture.',
    },
    contact: {
        title: 'Liên hệ',
        description: 'Liên hệ Kory Furniture để được tư vấn chọn nội thất phòng ngủ, báo giá và hỗ trợ đặt hàng.',
    },
    cart: { title: 'Giỏ hàng', noindex: true },
    pay: { title: 'Thanh toán', noindex: true },
};

function App() {
    let [state, setState] = useState(0);
    const render = () => {
        setState(state + 1);
    };
    const userLogin = localStorage.getItem('accessToken');
    if (userLogin) {
        setTimeout(() => {
            localStorage.removeItem('accessToken');
            toast.error('Phiên làm việc đã hết hạn, mời bạn đăng nhập lại để tiếp tục');
            setState(state + 1);
        }, 1800000);
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={
                                <Layout>
                                    <PageMeta {...SEO.home} />
                                    <Home render={render} />
                                </Layout>
                            }
                        />
                        <Route
                            path="intro"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.intro} />
                                    <Intro />
                                </Layout>
                            }
                        />
                        <Route
                            path="bed"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.bed} />
                                    <Bed render={render} />
                                </Layout>
                            }
                        />
                        <Route
                            path="bunkbed"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.bunkbed} />
                                    <Bunk render={render} />
                                </Layout>
                            }
                        />
                        <Route
                            path="accessory"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.accessory} />
                                    <Accessory render={render} />
                                </Layout>
                            }
                        />
                        <Route
                            path="news"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.news} />
                                    <News />
                                </Layout>
                            }
                        />
                        <Route
                            path="contact"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.contact} />
                                    <Contact />
                                </Layout>
                            }
                        />
                        <Route
                            path="cart"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.cart} />
                                    <Cart render={render} />
                                </Layout>
                            }
                        />
                        <Route
                            path="pay"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.pay} />
                                    <Pay />
                                </Layout>
                            }
                        />
                        <Route
                            path="pay-method"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.pay} />
                                    <PayMethod />
                                </Layout>
                            }
                        />
                        <Route
                            path="pay-method2"
                            element={
                                <Layout>
                                    <PageMeta {...SEO.pay} />
                                    <PayMethod2 />
                                </Layout>
                            }
                        />
                        <Route
                            path="productDetail/:id"
                            element={
                                <Layout>
                                    <ProductDetail render={render} />
                                </Layout>
                            }
                        />
                    </Route>
                    <Route path="admin">
                        <Route
                            index
                            element={
                                <LayoutAdmin>
                                    <Dashboard />
                                </LayoutAdmin>
                            }
                        />
                        <Route path="customer">
                            <Route
                                index
                                element={
                                    <LayoutAdmin>
                                        <Customers />
                                    </LayoutAdmin>
                                }
                            />
                            <Route
                                path="new-customer"
                                element={
                                    <LayoutAdmin>
                                        <NewCustomer />
                                    </LayoutAdmin>
                                }
                            />
                            <Route
                                path="edit-customer/:id"
                                element={
                                    <LayoutAdmin>
                                        <NewCustomer />
                                    </LayoutAdmin>
                                }
                            />
                        </Route>
                        <Route path="products">
                            <Route
                                index
                                element={
                                    <LayoutAdmin>
                                        <Products />
                                    </LayoutAdmin>
                                }
                            />
                            <Route
                                path="new-product"
                                element={
                                    <LayoutAdmin>
                                        <NewProduct />
                                    </LayoutAdmin>
                                }
                            />
                            <Route
                                path="edit-product/:id"
                                element={
                                    <LayoutAdmin>
                                        <NewProduct />
                                    </LayoutAdmin>
                                }
                            />
                        </Route>
                        <Route path="orders">
                            <Route
                                index
                                element={
                                    <LayoutAdmin>
                                        <Orders />
                                    </LayoutAdmin>
                                }
                            />
                        </Route>
                        <Route
                            path="analytics"
                            element={
                                <LayoutAdmin>
                                    <Analytics />
                                </LayoutAdmin>
                            }
                        />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default App;
