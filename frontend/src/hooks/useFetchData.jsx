import { useEffect, useState } from 'react';
import { token } from '../config';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            console.log('Fetching data from:', url);
            console.log('Using token:', token);

            if (!token) {
                console.error('No token available');
                setError('No authentication token available');
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                console.log('Response status:', res.status);
                console.log('Response headers:', JSON.stringify(res.headers, null, 2));

                let result;
                try {
                    result = await res.json();
                } catch (parseError) {
                    console.error('Error parsing JSON:', parseError);
                    throw new Error('Failed to parse server response');
                }

                console.log('Received result:', result);

                if (!res.ok) {
                    if (res.status === 401) {
                        // Implement token refresh logic here if needed
                        // const newToken = await refreshToken();
                        // if (newToken) {
                        //     // Retry the fetch with the new token
                        //     // ... (implement retry logic)
                        // } else {
                        //     throw new Error('Session expired. Please log in again.');
                        // }
                        throw new Error('Unauthorized. Please log in again.');
                    }
                    throw new Error(result.message || `HTTP error! status: ${res.status}`);
                }

                setData(result.data);
                setLoading(false);
            } catch (err) {
                console.error('Error in useFetchData:', err);
                console.error('Error details:', {
                    message: err.message,
                    url: url,
                    status: err.response?.status,
                    responseBody: err.response?.data
                });
                setLoading(false);
                setError({
                    message: err.message,
                    status: err.response?.status,
                    url: url
                });
            }
        };

        fetchData();
    }, [url, token]); // Added token to dependency array

    return { data, loading, error };
};

export default useFetchData;