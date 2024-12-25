// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import CompanyManagement from './components/Admin/CompanyManagement';
import CommunicationMethodManagement from './components/Admin/CommunicationMethodManagement';
import Dashboard from './components/User/Dashboard';
import Notifications from './components/User/Notifications';
import CalendarView from './components/User/CalendarView';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/admin/companies" element={<CompanyManagement />} />
              <Route path="/admin/methods" element={<CommunicationMethodManagement />} />
              <Route path="/user/dashboard" element={<Dashboard />} />
              <Route path="/user/notifications" element={<Notifications />} />
              <Route path="/user/calendar" element={<CalendarView />} />
              <Route path="/" element={<Dashboard />} /> {/* Default route */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
