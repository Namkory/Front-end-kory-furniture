import Sidebar from '../components/sidebar/Sidebar';
import './LayoutAdmin.scss';

function LayoutAdmin({ children }) {
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
