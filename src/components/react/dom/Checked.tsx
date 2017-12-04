import React from 'react';

interface Props {
}

interface State {
  isChecked: boolean;
}

export class Checked extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isChecked: true
    };
  }

  render() {
    return (
      <div>
        {/* 注释 */}
        <input
          type="radio"
          checked={this.state.isChecked}
          readOnly={true}
        />
      </div>
    );
  }
}