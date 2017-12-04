import React from 'react';

interface Props {
  slotBottom?: React.ReactNode;
}

interface State {
}

class Border extends React.Component <Props, State> {
  render() {
    return (
      <div className="Border Clickable">
        {this.props.children}

        <b>
          {this.props.slotBottom}
        </b>
      </div>
    );
  }
}

export default Border;