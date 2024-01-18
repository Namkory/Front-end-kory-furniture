import './Sidebar.scss';
import { useState } from 'react';
import images from '../../asset/image/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataSidebar } from './dataSidebar';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Sidebar() {
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
                        <NavLink
                            to={item.url}
                            className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item ')}
                            key={index}
                            /* Nếu không có "end" thì sẽ bị trường hợp luôn luôn active item đầu tiên vì 
                             đường dẫn các menu-item giống nhau ở phần đầu là "/admin" và react-router-dom sẽ chấp nhận
                             giá trị url gần giống. Còn nếu thêm "end" (các phiên bản router 6 trở lên) thì sẽ chỉ chấp nhận
                             giá trị url chính xác để active mà thôi ("exact" với các phiên bản router 5 trở xuống*/
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
