import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:9002',
});

export default apiClient;

