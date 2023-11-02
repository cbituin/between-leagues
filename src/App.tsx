import React from 'react';
import AppLayout from './components/app/app-layout';
import AppContainer from './components/app/app-container';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <AppLayout>
        <AppContainer />
      </AppLayout>
    </Container>
  );
}

export default App;
