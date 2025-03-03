import axios from './Customize-Axios';

export const createNewProduct = (data) => {
    return axios.post('/api/v2/product', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${
                localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')).jwt : null
            }`,
        },
    });
};

export const fetchProducts = async (categoryId) => {
    if (!categoryId) {
        console.error("fetchProducts: categoryId is undefined!");
        return [];
    }
    try {
        const response = await axios.get(`/api/v2/product/category/${categoryId}`);
        // console.log('Raw API Response:', response);

        return response; 
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export const getPById = (id) => {
    return axios.get(`/api/v2/product/${id}`);
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
    return axios.put('/api/v2/product', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${
                localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')).jwt : null
            }`,
        },
    });
};
