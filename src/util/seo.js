import { useEffect } from 'react';

export const SITE_NAME = 'Kory Furniture';
export const DEFAULT_TITLE = SITE_NAME;
export const DEFAULT_DESCRIPTION =
    'Kory Furniture chuyên cung cấp nội thất phòng ngủ: giường ngủ, giường tầng, nệm, chăn ga gối và phụ kiện cao cấp. Thiết kế hiện đại, giá tốt, giao hàng tận nơi.';

// Tạo hoặc cập nhật thẻ <meta> trong <head>
const setMeta = (attribute, key, content) => {
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

const toAbsoluteUrl = (url) => (url ? new URL(url, window.location.origin).href : '');

/**
 * Cập nhật title, description, robots và Open Graph cho từng trang.
 * - title: tên trang, sẽ được ghép thành "<title> | Kory Furniture"
 * - noindex: true cho các trang không muốn Google index (giỏ hàng, thanh toán, admin, 404...)
 */
export function usePageMeta({ title, description = DEFAULT_DESCRIPTION, image, noindex = false, type = 'website' } = {}) {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
        document.title = fullTitle;
        setMeta('name', 'description', description);
        setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
        setMeta('property', 'og:title', fullTitle);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:type', type);
        setMeta('property', 'og:url', window.location.origin + window.location.pathname);
        setMeta('property', 'og:image', toAbsoluteUrl(image));
        setMeta('name', 'twitter:title', fullTitle);
        setMeta('name', 'twitter:description', description);
    }, [title, description, image, noindex, type]);
}

// Dạng component để khai báo meta ngay trong App.js
export function PageMeta(props) {
    usePageMeta(props);
    return null;
}
