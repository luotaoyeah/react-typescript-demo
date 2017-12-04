import React from 'react';

interface Props {
}

interface State {
}

class C01 extends React.Component <Props, State> {
  render() {
    return (
      <p>C01</p>
    );
  }
}

/**
 * C02
 */
class C02 extends React.Component <Props, State> {
  render() {
    return (
      <p>C02</p>
    );
  }
}

export default {
  C01,
  C02
};