import { Box } from '@mui/material';
import React from 'react';
import axios from 'axios';

/** Componente dummy usando el API dummy de Tasky */
class DummyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummies: [{ id: '1231-3123-3123-3123', dummyValue: 'Lorem ipsum' }],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/dummies').then((res) => {
      const dummies = res.data;
      this.setState({ dummies });
    });
  }

  render() {
    const { dummies } = this.state;
    return (
      <Box sx={{ flexGrow: 1, p: 6 }}>
        <h1>Los Dummies</h1>
        <ul>
          {dummies.map((dummy) => (
            <li>{dummy.dummyValue}</li>
          ))}
        </ul>
      </Box>
    );
  }
}

export default (DummyPage);
