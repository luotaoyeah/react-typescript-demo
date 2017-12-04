import React from 'react';
import { Alert } from 'antd';

interface Props {
}

interface State {
}

export class NotMatched extends React.Component<Props, State> {
  render() {
    return (
      <Alert
        type="error"
        message="not matched"
        showIcon={true}
      />
    );
  }
}