import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/userPages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Layout from './layout/Layout';

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
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
