import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { fetchUsers } from '../../services/api';

vi.mock('axios');

describe('API Service', () => {
  it('fetches users successfully', async () => {
    const mockData = {
      users: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe'
        }
      ]
    };

    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    const result = await fetchUsers();
    expect(result).toEqual(mockData);
  });

  it('handles API errors', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('API Error'));

    await expect(fetchUsers()).rejects.toThrow('API Error');
  });
});