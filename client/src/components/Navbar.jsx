import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-indigo-600">MERN App</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                        {user ? (
                            <>
                                <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
                                <Link to="/profile" className="flex items-center text-gray-600 hover:text-gray-900">
                                    <User className="w-4 h-4 mr-1" /> Profile
                                </Link>
                                <button onClick={handleLogout} className="flex items-center text-red-600 hover:text-red-700">
                                    <LogOut className="w-4 h-4 mr-1" /> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                                <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Register</Link>
                            </>
                        )}
                    </div>

                    <div className="flex md:hidden items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                        <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
                        {user ? (
                            <>
                                <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Dashboard</Link>
                                <Link to="/profile" className="block px-3 py-2 text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Profile</Link>
                                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-red-600">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Login</Link>
                                <Link to="/register" className="block px-3 py-2 text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Register</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
