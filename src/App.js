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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
