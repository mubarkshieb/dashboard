import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

function handleError(error) {
    if (axios.isAxiosError(error)) {
        return new Error(error.response?.data?.message || 'An error occurred');
    }
    return new Error('An unexpected error occurred');
}

export const deviceService = {
    discoverNetwork: async (ipRange) => {
        try {
            const response = await api.post('/discover', { ipRange });
            return response.data;
        } catch (error) {
            throw handleError(error);
        }
    },

    getAllDevices: async () => {
        try {
            const response = await api.get('/devices/all');
            return { data: response.data };
        } catch (error) {
            throw handleError(error);
        }
    },


    getCameras: async () => {
        try {
            const response = await api.get('/devices/cameras');
            return response.data;
        } catch (error) {
            throw handleError(error);
        }
    },

    createDiscoveryRule: async (ipRange) => {
        try {
            const response = await api.post('/discovery-rules/create', { ipRange });
            return response.data;
        } catch (error) {
            throw handleError(error);
        }
    }
};
