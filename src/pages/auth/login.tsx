// src/pages/auth/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Box, Typography } from '@mui/material';
import api from '../../lib/api';
//incoming change
import React from 'react';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 10 }}>
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
}