import * as React from 'react';
import { Dialog } from './Dialog';

interface Props {
}

interface State {
  clickCounts: number;
}

export default class Portal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      clickCounts: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        clickCounts: prevState.clickCounts + 1
      };
    });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <div>
          Click Counts: {this.state.clickCounts}
        </div>
        <div className="Border Clickable">not portal</div>
        <Dialog>
          <div className="Border Clickable">portal</div>
        </Dialog>
      </div>
    );
  }
}