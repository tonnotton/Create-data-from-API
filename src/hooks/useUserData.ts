import { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';
import { transformData, calculateAgeRanges } from '../utils/transformer';
import type { GroupedData } from '../types';

export const useUserData = () => {
  const [data, setData] = useState<GroupedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchUsers();
        const transformed = transformData(response.users);
        const withAgeRanges = calculateAgeRanges(transformed, response.users);
        setData(withAgeRanges);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading, error };
};