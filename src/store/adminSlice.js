// src/store/adminSlice.js
import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    companies: [],
    communicationMethods: []
  },
  reducers: {
    addCompany: (state, action) => {
      state.companies.push({ ...action.payload, id: Date.now() });
    },
    editCompany: (state, action) => {
      const { id, updatedData } = action.payload;
      const company = state.companies.find(company => company.id === id);
      if (company) {
        Object.assign(company, updatedData);
      }
    },
    deleteCompany: (state, action) => {
      state.companies = state.companies.filter(company => company.id !== action.payload);
    },
    addCommunicationMethod: (state, action) => {
      state.communicationMethods.push({ ...action.payload, id: Date.now() });
    },
    editCommunicationMethod: (state, action) => {
      const { id, updatedData } = action.payload;
      const method = state.communicationMethods.find(method => method.id === id);
      if (method) {
        Object.assign(method, updatedData);
      }
    },
    deleteCommunicationMethod: (state, action) => {
      state.communicationMethods = state.communicationMethods.filter(method => method.id !== action.payload);
    }
  }
});

export const { addCompany, editCompany, deleteCompany, addCommunicationMethod, editCommunicationMethod, deleteCommunicationMethod } = adminSlice.actions;
export default adminSlice.reducer;
