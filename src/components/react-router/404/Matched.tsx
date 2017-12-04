import React from 'react';
import { Alert } from 'antd';

interface Props {
}

interface State {
}

export class Matched extends React.Component<Props, State> {
  render() {
    return (
      <Alert
        type="success"
        message="matched"
        showIcon={true}
      />
    );
  }
}