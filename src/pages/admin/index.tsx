// src/pages/admin/index.tsx
import { useUser } from '../../hooks/useUser';
import AuthGuard from '../../components/AuthGuard';
//incoming change
import React from 'react';



export default function AdminDashboard() {
  const { user } = useUser();

  if (user?.role !== 'ADMIN') {
    return <div>403 - Forbidden</div>;
  }

  return (
    <AuthGuard>
      <h1>Admin Dashboard</h1>
    </AuthGuard>
  );
}