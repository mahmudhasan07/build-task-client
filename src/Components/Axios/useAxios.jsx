import axios from 'axios';
import React from 'react';
export const AxiosSecure = axios.create({
    baseURL: `https://build-task.vercel.app`
})
const useAxios = () => {
    return AxiosSecure
};

export default useAxios;