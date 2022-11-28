import { Paper, Typography, Box } from '@mui/material';
import React from 'react';

class AboutPage extends React.PureComponent {
  render() {
    return (
      <Box sx={{ flexGrow: 1, p: 6 }}>
        <Paper
          elevation={2}
          sx={{ width: 400, height: 400, verticalAlign: 'bottom' }}
          align="center"
        >
          <Typography variant="h6">Aplicación de ejemplo Tasky.</Typography>
          <Typography variant="body2">
            Creada como proyecto del curso de cOnstrucción de software.
          </Typography>
          <Typography variant="body2">Copyright 2022.</Typography>
        </Paper>
      </Box>
    );
  }
}

export default AboutPage;
