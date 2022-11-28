import React from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import AppRoutes from './routes';
import Layout from './layout/Layout';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
          <Outlet />
        </Layout>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
