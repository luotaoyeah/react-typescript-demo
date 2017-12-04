import * as React from 'react';
import Name from './Name';
import Age from './Age';

interface Props {
  property: 'name' | 'age';
}

interface State {
}

const properties = {
  name: Name,
  age: Age
};

class RuntimeComponent extends React.Component <Props, State> {
  render() {
    const RealComponent: ( Name | typeof Age) = properties[this.props.property];
    return (
      <RealComponent/>
    );
  }
}

export default RuntimeComponent;