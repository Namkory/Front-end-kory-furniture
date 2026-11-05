import './Sidebar.scss';
import images from '../../asset/image/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataSidebar } from './dataSidebar';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={images.logokoryAdmin} alt="logo admin" className="logo-icon" />
            </div>
            <div className="menu">
                {dataSidebar.map((item, index) => {
                    return (
                        <NavLink
                            to={item.url}
                            className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item ')}
                            key={index}
                            end
                        >
                            <div className="menu-item-icon">
                                <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <span>{item.heading}</span>
                        </NavLink>
                    );
                })}
                <div className="menu-item">
                    <div className="menu-item-icon">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
