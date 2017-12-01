import * as React from 'react';
import { ContentEditable } from './ContentEditable';

interface Props {
}

interface State {
}

export default class ChapterIndex extends React.Component<Props, State> {
  render() {
    return (
      <div className="container">
        <ContentEditable/>
      </div>
    );
  }
}