import RightSide from '../components/rightSide/RightSide';
import Sidebar from '../components/sidebar/Sidebar';
import Dashboard from '../pages/adminPages/dashboard/Dashboard';
import './LayoutAdmin.scss';

function LayoutAdmin({ children }) {
    return (
        <div className="layoutAdmin">
            <div className="layoutAdmin-glass">
                <Sidebar />
                {children}
                <RightSide />
            </div>
        </div>
    );
}

export default LayoutAdmin;
