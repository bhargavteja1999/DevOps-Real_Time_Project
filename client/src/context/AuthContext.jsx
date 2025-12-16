import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            setError(null);
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const { data } = await axios.post('/api/login', { email, password }, config);

            localStorage.setItem('userInfo', JSON.stringify(data));
            setUser(data);
            return true;
        } catch (err) {
            setError(err.response?.data?.message || err.message);
            return false;
        }
    };

    const register = async (name, email, password) => {
        try {
            setError(null);
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const { data } = await axios.post('/api/register', { name, email, password }, config);

            localStorage.setItem('userInfo', JSON.stringify(data));
            setUser(data);
            return true;
        } catch (err) {
            setError(err.response?.data?.message || err.message);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
