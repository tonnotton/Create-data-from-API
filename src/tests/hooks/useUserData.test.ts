import { renderHook, waitFor } from '@testing-library/react';
import { useUserData } from '../../hooks/useUserData';
import { fetchUsers } from '../../services/api';

vi.mock('../../services/api');

describe('useUserData', () => {
  it('should fetch and transform data', async () => {
    const mockApiResponse = {
      users: [
        {
          firstName: 'John',
          lastName: 'Doe',
          gender: 'male',
          age: 30,
          company: { department: 'IT' },
          hair: { color: 'Brown' },
          address: { postalCode: '12345' }
        }
      ]
    };

    (fetchUsers as jest.Mock).mockResolvedValue(mockApiResponse);

    const { result } = renderHook(() => useUserData());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBeTruthy();
    expect(result.current.error).toBeNull();
  });

  it('should handle errors', async () => {
    (fetchUsers as jest.Mock).mockRejectedValue(new Error('API Error'));

    const { result } = renderHook(() => useUserData());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('API Error');
    expect(result.current.data).toBeNull();
  });
});
