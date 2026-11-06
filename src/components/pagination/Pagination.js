import './Pagination.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ELLIPSIS = '...';

// Trả về danh sách trang cần hiển thị, ví dụ: [1, '...', 4, 5, 6, '...', 10]
const getPageItems = (currentPage, totalPages, siblingCount = 1) => {
    const pages = [];
    for (let page = 1; page <= totalPages; page++) {
        const isEdge = page === 1 || page === totalPages;
        const isNearCurrent = Math.abs(page - currentPage) <= siblingCount;
        if (isEdge || isNearCurrent) {
            pages.push(page);
        } else if (pages[pages.length - 1] !== ELLIPSIS) {
            pages.push(ELLIPSIS);
        }
    }
    return pages;
};

function Pagination({ currentPage, totalPages, onChange }) {
    if (totalPages <= 1) return null;

    const goTo = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) onChange(page);
    };

    return (
        <nav className="pagination-wrapper" aria-label="Phân trang">
            <button
                type="button"
                className="pagination-item"
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Trang trước"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {getPageItems(currentPage, totalPages).map((item, index) =>
                item === ELLIPSIS ? (
                    <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                        {ELLIPSIS}
                    </span>
                ) : (
                    <button
                        key={item}
                        type="button"
                        className={`pagination-item${item === currentPage ? ' active' : ''}`}
                        onClick={() => goTo(item)}
                        aria-current={item === currentPage ? 'page' : undefined}
                    >
                        {item}
                    </button>
                ),
            )}

            <button
                type="button"
                className="pagination-item"
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Trang sau"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </nav>
    );
}

export default Pagination;
