import Sidebar from '../components/sidebar/Sidebar';
import './LayoutAdmin.scss';
import { usePageMeta } from '../util/seo';

function LayoutAdmin({ children }) {
    usePageMeta({ title: 'Quản trị', noindex: true });
    return (
        <div className="layoutAdmin">
            <div className="layoutAdmin-glass">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default LayoutAdmin;
