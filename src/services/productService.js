import axios from './Customize-Axios';

export const createNewProduct = (data) => {
    return axios.post('/api/v1/products', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${
                localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')).jwt : null
            }`,
        },
    });
};

export const fetchProducts = () => {
    return axios.get('/api/v1/products/get-all-products');
};

export const getPById = (id) => {
    return axios.get(`/api/v1/products/${id}`, {
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')).jwt : null
            }`,
        },
    });
};

export const deleteProduct = (id) => {
    return axios.delete(`/api/v1/products/${id}`, {
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')).jwt : null
            }`,
        },
    });
};

export const updateProduct = (formData) => {
    return axios.put('/api/v1/products', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${
                localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')).jwt : null
            }`,
        },
    });
};
