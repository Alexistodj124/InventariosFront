// src/LoginPage.jsx

import React from 'react';
import { TextField, Button, Box, Typography, Paper, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a custom dark MUI theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#dc004e', // Red
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const LoginPage = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log('Login button clicked');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center', // Centers horizontally & vertically
          width: '100vw', // Full viewport width
          height: '100vh', // Full viewport height
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            maxWidth: 480,
            width: '100%',
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
            >
              Bienvenidos a TRIASPECT
            </Typography>
            <Typography
              variant="body1"
              align="center"
              gutterBottom
              sx={{ color: theme.palette.text.secondary }}
            >
              Ingresa tus datos.
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={{ mt: 3, width: '100%' }}
            >
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                InputProps={{ style: { color: theme.palette.text.primary } }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                InputProps={{ style: { color: theme.palette.text.primary } }}
              />
              <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                <Link href="#" variant="body2" color="secondary">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 3, padding: 1, fontSize: '1rem', fontWeight: 'bold' }}
              >
                Iniciar Sesiòn
              </Button>
            </Box>
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 3, color: theme.palette.text.secondary }}
            >
              ¿No tienes cuenta?{' '}
              <Link href="#" color="primary" underline="hover">
                Registrate
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );  
};

export default LoginPage;
