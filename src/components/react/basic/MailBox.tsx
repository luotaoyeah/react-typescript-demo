import * as React from 'react';

interface Props {
  messages: string[];
  show?: boolean;
}

interface State {
}

class MailBox extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    if (this.props.show === false) {
      return null;
    }

    return (
      <div>
        {
          this.props.messages.length > 0 &&
          <span>you have {this.props.messages.length} unread messages</span>
        }
      </div>
    );
  }
}

export default MailBox;