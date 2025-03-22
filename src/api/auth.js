import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const signup = async (name, username, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name, username, password });
        console.log("response", response.data)
        return response.data;
    } catch (error) {
        console.error('Signup failed', error.response?.data);
        throw error;
    }
};
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Login failed', error.response?.data);
        throw error;
    }
};

export const fetchUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/userDetails`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch user data', error.response?.data);
        throw error;
    }
};

export const logOut = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Login failed', error.response?.data);
        throw error;
    }
};