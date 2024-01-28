import axios from './Customize-Axios';

export const createNewProduct = (data) => {
    return axios.post('/api/v1/products', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const fetchProducts = () => {
    return axios.get('/api/v1/products');
};

export const getPById = (id) => {
    return axios.get(`/api/v1/products/${id}`);
};

export const deleteProduct = (id) => {
    return axios.delete(`/api/v1/products/${id}`);
};

export const updateProduct = (formData) => {
    return axios.put('/api/v1/products', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
