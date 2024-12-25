// src/components/Admin/CompanyManagement.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany, editCompany, deleteCompany } from '../../store/adminSlice';

const CompanyManagement = () => {
  const [companyData, setCompanyData] = useState({
    name: '',
    location: '',
    linkedInProfile: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: ''
  });

  const companies = useSelector((state) => state.admin.companies);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCompany(companyData));
    setCompanyData({
      name: '',
      location: '',
      linkedInProfile: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      communicationPeriodicity: ''
    });
  };

  const handleEdit = (id, updatedData) => {
    dispatch(editCompany({ id, updatedData }));
  };

  const handleDelete = (id) => {
    dispatch(deleteCompany(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Company Management</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input type="text" name="name" value={companyData.name} onChange={handleChange} placeholder="Company Name" className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <input type="text" name="location" value={companyData.location} onChange={handleChange} placeholder="Location" className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <input type="text" name="linkedInProfile" value={companyData.linkedInProfile} onChange={handleChange} placeholder="LinkedIn Profile" className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <input type="text" name="emails" value={companyData.emails} onChange={handleChange} placeholder="Emails" className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <input type="text" name="phoneNumbers" value={companyData.phoneNumbers} onChange={handleChange} placeholder="Phone Numbers" className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <input type="text" name="comments" value={companyData.comments} onChange={handleChange} placeholder="Comments" className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <input type="text" name="communicationPeriodicity" value={companyData.communicationPeriodicity} onChange={handleChange} placeholder="Communication Periodicity" className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Company</button>
      </form>
      <ul>
        {companies.map((company) => (
          <li key={company.id} className="border p-2 mb-2">
            {company.name} - {company.location}
            <button onClick={() => handleEdit(company.id, { name: 'New Name' })} className="bg-yellow-500 text-white p-1 ml-2">Edit</button>
            <button onClick={() => handleDelete(company.id)} className="bg-red-500 text-white p-1 ml-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
