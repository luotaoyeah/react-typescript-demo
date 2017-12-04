import React from 'react';
import { Alert } from 'antd';

interface Props {
}

interface State {
}

class PublicPage extends React.Component <Props, State> {
  render() {
    return (
      <Alert
        message="public page"
        type="success"
      />
    );
  }
}

export { PublicPage };