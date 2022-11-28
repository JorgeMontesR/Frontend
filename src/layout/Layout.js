import React from 'react';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Container>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
        <Footer />
      </Container>
    );
  }
}
export default Layout;
