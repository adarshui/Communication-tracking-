// src/components/User/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../utils/dateUtils';

const Dashboard = () => {
  const companies = useSelector((state) => state.user.companies);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Company Name</th>
            <th className="py-2 px-4 border-b">Last Five Communications</th>
            <th className="py-2 px-4 border-b">Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td className="py-2 px-4 border-b">{company.name}</td>
              <td className="py-2 px-4 border-b">
                {company.communications.slice(0, 5).map((comm, index) => (
                  <div key={index}>
                    {comm.type} - {formatDate(comm.date)}
                  </div>
                ))}
              </td>
              <td className="py-2 px-4 border-b">{company.nextCommunication.type} - {formatDate(company.nextCommunication.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
