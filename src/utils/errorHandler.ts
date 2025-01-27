import { AxiosError } from 'axios';

export const handleApiError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    if (error.response) {
      // Handle server error response
      return error.response.data?.message || 'Server error occurred';
    } else if (error.request) {
      // Handle no response from server
      return 'No response from server';
    }
    // Handle other axios errors
    return error.message;
  }
  // Handle non-axios errors
  return 'An unexpected error occurred';
};