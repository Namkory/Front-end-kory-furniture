import './CategoryMenu.scss';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../util/categories';

function CategoryMenu() {
    return (
        <div className="category-menu">
            <div className="category-menu-title">DANH MỤC SẢN PHẨM</div>
            <div className="category-menu-list">
                {Object.values(CATEGORIES).map((category, index) => (
                    <Fragment key={category.id}>
                        {index > 0 && <span></span>}
                        <Link to={category.path} style={{ textDecoration: 'none' }}>
                            <p>{category.name}</p>
                        </Link>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default CategoryMenu;
