import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user } = useAuth();
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                };
                const { data } = await axios.get('/api/profile', config);
                setProfileData(data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            }
        };

        if (user) {
            fetchProfile();
        }
    }, [user]);

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application status.</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        {error && (
                            <div className="px-4 py-5 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-red-500">Error</dt>
                                <dd className="mt-1 text-sm text-red-900 sm:mt-0 sm:col-span-2">{error}</dd>
                            </div>
                        )}
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData ? profileData.name : 'Loading...'}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData ? profileData.email : 'Loading...'}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Account Created</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData ? new Date(profileData.createdAt).toLocaleDateString() : 'Loading...'}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Profile;
