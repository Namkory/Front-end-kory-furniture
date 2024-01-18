import { faCartShopping, faChartColumn, faClipboard, faHouseChimney, faUsers } from '@fortawesome/free-solid-svg-icons';

export const dataSidebar = [
    {
        icon: faHouseChimney,
        heading: 'Dashboard',
        url: '/admin',
    },
    {
        icon: faClipboard,
        heading: 'Orders',
        url: '/admin/orders',
    },
    {
        icon: faUsers,
        heading: 'Customers',
        url: '/admin/customer',
    },
    {
        icon: faCartShopping,
        heading: 'Products',
        url: '/admin/products',
    },
    {
        icon: faChartColumn,
        heading: 'Analytics',
        url: '/admin/analytics',
    },
];
