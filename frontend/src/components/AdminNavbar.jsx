import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {/* Logo */}
        <Link to="/admin" className="text-xl font-bold mb-3 sm:mb-0">
          Admin Panel
        </Link>

        {/* Nav Links */}
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
          <Link to="/admin" className="hover:text-blue-400">
            Messages
          </Link>
          <Link to="/admin/users" className="hover:text-blue-400">
            Users
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-left sm:text-center"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
