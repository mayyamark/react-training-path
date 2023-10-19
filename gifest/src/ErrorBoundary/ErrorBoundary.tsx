import React from 'react';
import Typography from '../Typography/Typography';
import Box from '@mui/material/Box/Box';
import Link from '@mui/material/Link/Link';

interface Props {
  children?: React.ReactNode;
}

interface State {
  error: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(err: Error) {
    return { error: true };

  }
  
  componentDidCatch(err: Error, info: React.ErrorInfo) {
    console.log('Something went wrong', { err, info })
  }

  render() {
    if (this.state.error) {
      return (
        <Box 
          width='100vw' 
          height='100vh' 
          display='flex' 
          alignItems='center' 
          justifyContent='center' 
          flexDirection='column'
        >
          <Typography 
            variant='h1' 
            gutterBottom
          >
            Something went wrong!
          </Typography>
          <Typography variant='h3'>
            Click <Link underline='none' href='/'>here</Link> to go to the home page...
          </Typography>
        </Box>
        
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
