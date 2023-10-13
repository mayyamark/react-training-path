import React from 'react';

interface Props {
  children?: React.ReactNode;
  fallback: React.ReactNode;
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
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
