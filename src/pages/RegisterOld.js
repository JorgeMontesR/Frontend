import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

class RegisterPage extends React.PureComponent {
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
              Hola
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" fullWidth="true">
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default RegisterPage;
