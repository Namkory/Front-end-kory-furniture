import axios from './Customize-Axios';

export const createNewUser = (data) => {
    return axios.post('/api/v1/users', data);
};

export const getAllUser = () => {
    return axios.get('/api/v1/users');
};

export const deleteUser = (id) => {
    return axios.delete(`/api/v1/users/${id}`);
};

export const getUserById = (id) => {
    return axios.get(`/api/v1/users/${id}`);
};

export const updateUser = (data) => {
    return axios.put('/api/v1/users', data);
};
