import React from 'react';
import Box from '@mui/material/Box/Box';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

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
          <ErrorMessage />
        </Box>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
