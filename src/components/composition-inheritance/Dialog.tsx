import * as React from 'react';

interface Props {
  title: React.ReactNode;
  body: React.ReactNode;
}

interface State {
}

class Dialog extends React.Component <Props, State> {
  render() {
    return (
      <div>
        <h1>Dialog</h1>
        <div className="title">
          {this.props.title}
        </div>
        <div className="body">
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default Dialog;