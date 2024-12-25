// src/services/api.js
import axios from 'axios';

const API_URL = 'https://your-vercel-backend-url.vercel.app/api'; // Update this URL based on your backend deployment

export const fetchCompanies = async () => {
  try {
    const response = await axios.get(`${API_URL}/companies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};
