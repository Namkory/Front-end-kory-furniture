import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/userPages/home/Home';
import Layout from './layout/Layout';
import Intro from './pages/userPages/intro/Intro';
import Bed from './pages/userPages/bed/Bed';
import Bunkbed from './pages/userPages/bunkBed/BunkBed';
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

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={
                                <Layout>
                                    <Home />
                                </Layout>
                            }
                        />
                        <Route
                            path="intro"
                            element={
                                <Layout>
                                    <Intro />
                                </Layout>
                            }
                        />
                        <Route
                            path="bed"
                            element={
                                <Layout>
                                    <Bed />
                                </Layout>
                            }
                        />
                        <Route
                            path="bunkbed"
                            element={
                                <Layout>
                                    <Bunkbed />
                                </Layout>
                            }
                        />
                        <Route
                            path="accessory"
                            element={
                                <Layout>
                                    <Accessory />
                                </Layout>
                            }
                        />
                        <Route
                            path="news"
                            element={
                                <Layout>
                                    <News />
                                </Layout>
                            }
                        />
                        <Route
                            path="contact"
                            element={
                                <Layout>
                                    <Contact />
                                </Layout>
                            }
                        />
                        <Route
                            path="cart"
                            element={
                                <Layout>
                                    <Cart />
                                </Layout>
                            }
                        />
                        <Route
                            path="pay"
                            element={
                                <Layout>
                                    <Pay />
                                </Layout>
                            }
                        />
                        <Route
                            path="productDetail"
                            element={
                                <Layout>
                                    <ProductDetail />
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
