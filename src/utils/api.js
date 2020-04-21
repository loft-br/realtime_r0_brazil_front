import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://realtime-r0-covid-brazil.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export const get = (path, params = {}) =>
  axiosInstance(path, { params: params });

export const post = (path, data) =>
  axiosInstance(path, { method: 'POST', data });

export const put = (path, data) => axiosInstance(path, { method: 'PUT', data });

export const remove = (path) => axiosInstance(path, { method: 'DELETE' });

export const upload = (path, formattedFormData) =>
  axiosInstance(path, {
    method: 'POST',
    data: formattedFormData,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  });
