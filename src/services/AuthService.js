import axios from './Customize-Axios';

export const loginUser = (data) => {
    return axios.post('/api/v1/auth', data);
};
