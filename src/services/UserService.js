import axios from './Customize-Axios';

const sendRequest = (method, endpoint, data = null) => {
    return axios({
        method: method,
        url: endpoint,
        data: data,
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken')).jwt}`,
        },
    });
};

export const createNewUser = (data) => {
    return sendRequest('post', '/api/v1/users', data);
};

export const getAllUser = () => {
    return sendRequest('get', '/api/v1/users');
};

export const deleteUser = (id) => {
    return sendRequest('delete', `/api/v1/users/${id}`);
};

export const getUserById = (id) => {
    return sendRequest('get', `/api/v1/users/${id}`);
};

export const updateUser = (data) => {
    return sendRequest('put', '/api/v1/users', data);
};
