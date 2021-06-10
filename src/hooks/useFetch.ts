import React from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API || 'http://localhost:3333';
const api = axios.create({ baseURL: BASE_URL });

export const useFetch = (url: string): any => {
    const [data, setResponse] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [options, setOptions] = React.useState({});
    const doFetch = React.useCallback((localOptions = {}) => {
        setOptions(localOptions);
        setLoading(true);
    }, []);

    React.useEffect(() => {
        if (!loading) {
            return;
        }

        const fetchData = async (): Promise<any> => {
            try {
                const res = await api(url, options);
                setResponse(res.data);
            } catch (err) {
                const ErrorResponse = err.response
                    ? err.response.data
                    : 'Server error';
                setError(ErrorResponse);
            }
            setLoading(false);
        };
        fetchData();
    }, [loading, options, url]);

    return [{ data, error, loading }, doFetch];
};
