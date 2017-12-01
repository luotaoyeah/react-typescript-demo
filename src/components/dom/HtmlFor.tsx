import * as React from 'react';

interface Props {
}

interface State {
}

export class HtmlFor extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
        />
      </div>
    );
  }
}