// src/services/api.js
import axios from 'axios';

// Replace with your actual deployed backend URL
const API_URL = 'https://communication-tracker-i199hohgg-adarshuis-projects.vercel.app/api';

export const fetchCompanies = async () => {
  try {
    const response = await axios.get(`${API_URL}/companies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};
