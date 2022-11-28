import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';

class PublicPage extends React.PureComponent {
  render() {
    return (
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} maxWidth="sm">
          <Grid item xs={12}>
            <Typography variant="h3" color="inherit" component="h1">
              Tasky
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth="true" href="/registro">
              Registrarse
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" fullWidth="true" href="/home">
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default PublicPage;
