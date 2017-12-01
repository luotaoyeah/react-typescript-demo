import * as React from 'react';
import { EventPool } from './EventPool';

interface Props {
}

interface State {
}

export default class ChapterIndex extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <EventPool/>
      </div>
    );
  }
}