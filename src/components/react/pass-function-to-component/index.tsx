import * as React from 'react';
import { PassParamToEventHandler } from './PassParamToEventHandler';

interface Props {
}

interface State {
}

export default class ChapterIndex extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <PassParamToEventHandler/>
      </div>
    );
  }
}