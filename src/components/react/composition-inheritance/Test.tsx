import React from 'react';
import BigDialog from './BigDialog';

interface Props {
}

interface State {
}

class Test extends React.Component <Props, State> {
  render() {
    return (
      <BigDialog
        title="标题"
        body="内容"
      />
    );
  }
}

export default Test;