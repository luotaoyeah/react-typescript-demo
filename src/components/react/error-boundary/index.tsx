import React from 'react';
import { MyErrorBoundary } from './MyErrorBoundary';
import { SomeComponent } from './SomeComponent';

interface Props {
}

interface State {
}

export default class ErrorBoundaryDemo extends React.Component<Props, State> {

  render() {
    return (
      <div>
        <MyErrorBoundary>
          <SomeComponent/>
        </MyErrorBoundary>
      </div>
    );
  }
}