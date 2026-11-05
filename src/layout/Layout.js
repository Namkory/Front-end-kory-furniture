import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div style={{ paddingTop: 'var(--header-height)' }}>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
