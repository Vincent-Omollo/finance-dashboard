// src/hooks/useUser.ts
import { useEffect, useState } from 'react';
import api from '../lib/api';

export function useUser() {
  const [user, setUser] = useState<{ role: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/auth/me');
        setUser(res.data);
      } catch (error) {
        console.error('Not authenticated');
      }
    };
    fetchUser();
  }, []);

  return { user };
}