import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

const HOST = import.meta.env.VITE_API_HOST;

const User = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [itemsPerPage] = useState(20);
  const [actionMessage, setActionMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${HOST}/admin/newsLetter`, {
          withCredentials: true,
        });
        const data = res.data;
        setEmails(Array.isArray(data.emails) ? data.emails : []);
        setError("");
      } catch (err) {
        setError("Failed to fetch emails. Please try again later.");
        setEmails([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEmails();
  }, []);

  const filteredEmails = useMemo(() => {
    let result = emails.filter(({ userEmail }) =>
      userEmail.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig.key) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key] || '';
        const bValue = b[sortConfig.key] || '';
        return sortConfig.direction === 'ascending'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      });
    }
    return result;
  }, [emails, searchTerm, sortConfig]);

  const totalPages = Math.ceil(filteredEmails.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredEmails.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filteredEmails, itemsPerPage]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleSelectEmail = (email) => {
    setSelectedEmails(prev =>
      prev.includes(email._id)
        ? prev.filter(e => e !== email._id)
        : [...prev, email._id]
    );
  };

  const handleSelectAll = () => {
    if (selectedEmails.length === currentItems.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(currentItems.map(item => item._id));
    }
  };

  const handleDeleteSelected = async () => {
    try {
      await axios.delete(`${HOST}/admin/newsLetter`, {
        data: { emails: selectedEmails },
        withCredentials: true,
      });
      setEmails(prev => prev.filter(email => !selectedEmails.includes(email._id)));
      setSelectedEmails([]);
      showMessage('Selected emails deleted successfully', 'success');
    } catch (err) {
      showMessage('Failed to delete emails', 'error');
    }
  };

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,Email\n" +
      emails.map(e => e.userEmail).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "newsletter_emails.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showMessage('CSV exported successfully', 'success');
  };

  const showMessage = (text, type) => {
    setActionMessage({ text, type });
    setTimeout(() => setActionMessage({ text: '', type: '' }), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold text-center mb-6">Newsletter Email Subscribers</h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search emails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:max-w-sm p-2 border border-gray-300 rounded"
        />

        <div className="flex gap-2">
          <button
            onClick={handleExportCSV}
            disabled={emails.length === 0}
            className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
          >
            Export CSV
          </button>
          {/* {selectedEmails.length > 0 && (
            // <button
            //   onClick={handleDeleteSelected}
            //   className="px-4 py-2 bg-red-500 text-white rounded"
            // >
            //   Delete Selected ({selectedEmails.length})
            // </button>
          )} */}
        </div>
      </div>

      {actionMessage.text && (
        <div className={`text-white px-4 py-2 rounded mb-4 ${actionMessage.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
          {actionMessage.text}
        </div>
      )}

      {loading && <p className="text-center">Loading subscriber data...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && emails.length === 0 && (
        <p className="text-center text-gray-500">No subscribers yet</p>
      )}

      {!loading && !error && emails.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">
                  <input
                    type="checkbox"
                    checked={selectedEmails.length === currentItems.length && currentItems.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th
                  className="p-2 text-left cursor-pointer"
                  onClick={() => requestSort('userEmail')}
                >
                  Email
                  {sortConfig.key === 'userEmail' && (sortConfig.direction === 'ascending' ? ' ↑' : ' ↓')}
                </th>
                <th className="p-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((email) => (
                <tr key={email._id} className={`${selectedEmails.includes(email._id) ? 'bg-blue-50' : ''}`}>
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={selectedEmails.includes(email._id)}
                      onChange={() => handleSelectEmail(email)}
                    />
                  </td>
                  <td className="p-2 break-words">{email.userEmail}</td>
                  <td className="p-2 text-right">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(email.userEmail);
                        showMessage('Email copied to clipboard', 'success');
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      Copy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default User;
