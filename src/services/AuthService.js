import axios from './Customize-Axios';

export const loginUser = (data) => {
    return axios.post('/api/auth/login', data);
};
