// services/api.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const fetchCompanies = async () => {
  const response = await axios.get(`${API_URL}/companies`);
  return response.data;
};

export const addCompany = async (companyData) => {
  const response = await axios.post(`${API_URL}/companies`, companyData);
  return response.data;
};

// Add more API functions as needed
