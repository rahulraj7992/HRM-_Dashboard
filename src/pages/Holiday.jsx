import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/Holiday.css';

const Holiday = () => {
  const [holidays, setHolidays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({ name: '', status: 'Pending' });
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const holidaysPerPage = 5;

  const userRole = 'HR'; // or 'Admin' — replace with actual role logic

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('holidays')) || [];
    setHolidays(saved);
  }, []);

  const saveToLocal = (data) => {
    localStorage.setItem('holidays', JSON.stringify(data));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const existing = holidays.find(h => h.date === date.toISOString().split('T')[0]);
    if (existing && (userRole === 'HR' || userRole === 'Admin')) {
      setFormData(existing);
      setEditId(existing.id);
      setShowForm(true);
    } else if (userRole === 'HR' || userRole === 'Admin') {
      setFormData({ name: '', status: 'Pending' });
      setEditId(null);
      setShowForm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateStr = selectedDate.toISOString().split('T')[0];
    let updated;
    if (editId !== null) {
      updated = holidays.map(h => h.id === editId ? { ...h, ...formData, date: dateStr } : h);
      toast.success('Holiday updated!');
    } else {
      const newHoliday = { id: Date.now(), ...formData, date: dateStr };
      updated = [...holidays, newHoliday];
      toast.success('Holiday added!');
    }
    setHolidays(updated);
    saveToLocal(updated);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (userRole !== 'HR' && userRole !== 'Admin') return;
    const updated = holidays.filter(h => h.id !== id);
    setHolidays(updated);
    saveToLocal(updated);
    toast.success('Holiday deleted!');
  };

  const filteredHolidays = holidays.filter((h) => {
    const matchStatus = !statusFilter || h.status === statusFilter;
    const matchStart = !startDate || new Date(h.date) >= new Date(startDate);
    const matchEnd = !endDate || new Date(h.date) <= new Date(endDate);
    const matchSearch =
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.date.includes(searchQuery);
    return matchStatus && matchStart && matchEnd && matchSearch;
  });

  const indexOfLast = currentPage * holidaysPerPage;
  const indexOfFirst = indexOfLast - holidaysPerPage;
  const currentHolidays = filteredHolidays.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredHolidays.length / holidaysPerPage);

  return (
    <div className="holiday-container">
      <ToastContainer />
      <h2 className="holiday-title">Holiday Calendar & Dashboard</h2>
      <div className="holiday-calendar-wrapper">
        <Calendar onClickDay={handleDateClick} />
      </div>

      {showForm && (userRole === 'HR' || userRole === 'Admin') && (
        <form onSubmit={handleSubmit} className="holiday-form">
          <h4>{editId ? 'Edit Holiday' : 'Add Holiday'}</h4>
          <input
            type="text"
            placeholder="Holiday Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
          <button type="submit">{editId ? 'Update' : 'Add'} Holiday</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}

      <div className="holiday-filters">
        <input
          type="text"
          placeholder="Search holiday..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      <div className="holiday-cards">
        {currentHolidays.map((h) => (
          <div key={h.id} className={`holiday-card holiday-${h.status.toLowerCase()}`}>
            <div onClick={() => (userRole === 'HR' || userRole === 'Admin') && handleDateClick(new Date(h.date))}>
              <h4>{h.name}</h4>
              <p>{h.date}</p>
              <span className={`holiday-badge holiday-${h.status.toLowerCase()}`}>{h.status}</span>
            </div>
            {(userRole === 'HR' || userRole === 'Admin') && (
              <button className="holiday-delete" onClick={() => handleDelete(h.id)}>✕</button>
            )}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="holiday-pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`holiday-page-btn ${i + 1 === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Holiday;
