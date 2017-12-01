import * as React from 'react';
import { Alert } from 'antd';

interface Props {
}

interface State {
}

class ProtectedPage extends React.Component <Props, State> {
  render() {
    return (
      <Alert
        message="protected page"
        type="error"
      />
    );
  }
}

export { ProtectedPage };