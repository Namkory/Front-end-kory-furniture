import './Sidebar.scss';
import { useState } from 'react';
import images from '../../asset/image/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataSidebar } from './dataSidebar';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="sidebar">
            {/* logo */}
            <div className="logo">
                <img src={images.logokoryAdmin} alt="logo admin" className="logo-icon" />
            </div>
            {/* Menu */}
            <div className="menu">
                {dataSidebar.map((item, index) => {
                    return (
                        <div
                            className={selected === index ? 'menu-item active' : 'menu-item'}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <div className="menu-item-icon">
                                <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <span>{item.heading}</span>
                        </div>
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
