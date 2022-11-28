import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

class RegistroPage extends React.PureComponent {
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
              Registro
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" fullWidth="true" label="Correo electrónico" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" fullWidth="true" label="Contraseña" variant="outlined" type="password" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth="true" href="/home">
              Registro
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default RegistroPage;
