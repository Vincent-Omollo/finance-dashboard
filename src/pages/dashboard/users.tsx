import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import AuthGuard from '../../components/AuthGuard';
import React from 'react';


export default function Users() {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await api.get('/users');
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <AuthGuard>
      <div>
        <h1>Users</h1>
        <ul>
          {users?.map((user: any) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </div>
    </AuthGuard>
  );
}
