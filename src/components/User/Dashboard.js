// src/components/User/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../../services/api';
import { formatDate } from '../../utils/dateUtils';

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const data = await fetchCompanies();
        setCompanies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCompanies();
  }, []);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4">Error: {error}</div>;
  }

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
