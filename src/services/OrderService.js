import axios from './Customize-Axios';

export const createOrder = (data) => {
    return axios.post('/api/v1/order', data, {
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')).jwt : null
            }`,
        },
    });
};

export const getAllOrders = () => {
    return axios.get('/api/v1/order', {
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')).jwt : null
            }`,
        },
    });
};
