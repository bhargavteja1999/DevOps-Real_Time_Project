import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome back, {user?.name}!</h1>
                    <p className="text-gray-600">This is your protected dashboard.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
