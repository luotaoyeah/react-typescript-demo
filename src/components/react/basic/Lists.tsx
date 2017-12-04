import React from 'react';
import Person from './Person';

interface Props {
  persons: Person[];
}

interface State {
}

class Lists extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.persons.map((person) => <li key={person.id}>{person.name}</li>)}
        <br/>
        {this.props.persons.map((person) => <li key={person.id}>{person.name}</li>)}
      </ul>
    );
  }
}

export default Lists;