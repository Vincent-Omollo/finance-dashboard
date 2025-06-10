// src/components/AuthGuard.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
//incoming change
import React from 'react';



export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/auth/login');
  }, []);

  return <>{children}</>;
}