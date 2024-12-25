// src/components/Admin/CommunicationMethodManagement.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommunicationMethod, editCommunicationMethod, deleteCommunicationMethod } from '../../store/adminSlice';

const CommunicationMethodManagement = () => {
  const [methodData, setMethodData] = useState({
    name: '',
    description: '',
    sequence: '',
    mandatory: false
  });

  const methods = useSelector((state) => state.admin.communicationMethods);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMethodData({ ...methodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCommunicationMethod(methodData));
    setMethodData({
      name: '',
      description: '',
      sequence: '',
      mandatory: false
    });
  };

  const handleEdit = (id, updatedData) => {
    dispatch(editCommunicationMethod({ id, updatedData }));
  };

  const handleDelete = (id) => {
    dispatch(deleteCommunicationMethod(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Communication Method Management</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input type="text" name="name" value={methodData.name} onChange={handleChange} placeholder="Method Name" className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <input type="text" name="description" value={methodData.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <input type="number" name="sequence" value={methodData.sequence} onChange={handleChange} placeholder="Sequence" className="border p-2 w-full" />
        </div>
        <div className="mb-2">
          <input type="checkbox" name="mandatory" checked={methodData.mandatory} onChange={(e) => setMethodData({ ...methodData, mandatory: e.target.checked })} />
          <label className="ml-2">Mandatory</label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Method</button>
      </form>
      <ul>
        {methods.map((method) => (
          <li key={method.id} className="border p-2 mb-2">
            {method.name} - {method.description}
            <button onClick={() => handleEdit(method.id, { name: 'New Name' })} className="bg-yellow-500 text-white p-1 ml-2">Edit</button>
            <button onClick={() => handleDelete(method.id)} className="bg-red-500 text-white p-1 ml-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodManagement;
