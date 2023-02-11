import axios from 'axios';

const API_URL = '/accounts/';

// Register User
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  if (response.data) {
    const { data } = response;
    localStorage.setItem('user', JSON.stringify(data));
  }

  return response.data;
};

// Login User
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data) {
    const { data } = response;
    localStorage.setItem('user', JSON.stringify(data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = { register, login, logout };

export default authService;
