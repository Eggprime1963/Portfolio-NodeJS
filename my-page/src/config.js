const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://portfolio-production-d3cc.up.railway.app'
  : 'http://localhost:5000';

export { API_BASE_URL };