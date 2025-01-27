import axios, { AxiosError } from 'axios';
import type { ApiResponse } from '../types';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchUsers = async (): Promise<ApiResponse> => {
  try {
    const { data } = await api.get<ApiResponse>('/users');
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Failed to fetch users');
    }
    throw error;
  }
};