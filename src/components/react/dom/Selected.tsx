import * as React from 'react';

interface Props {
}

interface State {
}

export class Selected extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <select defaultValue={'B'}>
          <option
            value="A"
          >A
          </option>
          <option
            value="B"
            style={
              {
                color: 'red'
              }
            }
          >B
          </option>
        </select>
      </div>
    );
  }
}