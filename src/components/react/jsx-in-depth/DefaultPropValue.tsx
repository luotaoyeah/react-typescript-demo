import React from 'react';

interface Props {
  /**
   * 获取焦点
   */
  isFocus: boolean;
  name?: string;
}

interface State {
}

class DefaultPropValue extends React.Component <Props, State> {
  render() {
    return (
      <p>
        {this.props.isFocus ? 'FOCUS' : 'BLUR'}
        <b>{this.props.name}</b>
      </p>
    );
  }
}

export default DefaultPropValue;