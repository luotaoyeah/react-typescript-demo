import * as React from 'react';
import {
  Link,
  LinkProps
} from 'react-router-dom';

interface Props extends LinkProps {
}

interface State {
}

export class NavLink extends React.Component<Props, State> {
  render() {
    return (
      <li
        style={{
          textAlign: 'center',
          flex: 1,
          listStyleType: 'none',
          padding: '10px'
        }}
      >
        <Link {...this.props} style={{ color: 'inherit' }}/>
      </li>
    );
  }
}