import React from 'react';
import {
  ErrorInfo,
  ReactNode
} from 'react';

interface Props {
}

interface State {
  hasError: boolean;
}

export class MyErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="Border">ERROR</div>
      );
    } else {
      return this.props.children as ReactNode;
    }
  }
}