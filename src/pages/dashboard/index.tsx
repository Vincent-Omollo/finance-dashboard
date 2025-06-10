// pages/dashboard/index.tsx
import AuthGuard from '../../components/AuthGuard';
//incoming change
import React from 'react';


export default function Dashboard() {
  return (
    <AuthGuard>
      <h1>Welcome to Dashboard!</h1>
    </AuthGuard>
  );
}