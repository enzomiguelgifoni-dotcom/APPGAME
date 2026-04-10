import axios from 'axios';

export const API_KEY = 'SUA_CHAVE_AQUI'; // <--- COLOCA AQUI

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

export default api;