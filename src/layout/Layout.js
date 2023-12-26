import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Layout({ children }) {
    return (
        <div className="">
            <Header />
            <div className="" style={{ paddingTop: '100px' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
