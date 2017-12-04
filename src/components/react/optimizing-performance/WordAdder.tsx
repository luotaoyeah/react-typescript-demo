import * as React from 'react';
import { WordList } from './WordList';

interface Props {

}

interface State {
  words: string[];
}

export class WordAdder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      words: ['a']
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      words: this.state.words.concat('a')
    });
  }

  render() {
    return (
      <div>
        <WordList words={this.state.words}/>
        <button onClick={this.handleButtonClick}>add a word</button>
      </div>
    );
  }
}