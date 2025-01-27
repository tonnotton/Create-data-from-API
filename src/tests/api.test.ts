import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { fetchUsers } from '../src/services/api';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Service', () => {
  it('fetches users successfully', async () => {
    const mockData = {
      users: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          // ... other user properties
        }
      ],
      total: 1,
      skip: 0,
      limit: 30
    };

    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchUsers();
    expect(result).toEqual(mockData);
  });

  it('handles errors correctly', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(fetchUsers()).rejects.toThrow();
  });
});