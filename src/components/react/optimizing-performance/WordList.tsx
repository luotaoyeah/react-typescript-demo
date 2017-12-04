import * as React from 'react';

interface Props {
  words: string[];
}

interface State {
}

export class WordList extends React.PureComponent<Props, State> {

  render() {
    return (
      <div>
        {this.props.words.join(', ')}
      </div>
    );
  }
}