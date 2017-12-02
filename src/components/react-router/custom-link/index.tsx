import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { About } from './About';
import { Home } from './Home';
import { Route } from 'react-router-dom';
import { CustomLink } from './CustomLink';

interface Props {
}

interface State {
}

export default class CustomLinkIndex extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>CustomLink</h1>

        <CustomLink
          to={`${this.props.match.url}/home`}
          label="Home"
        />
        <CustomLink
          to={`${this.props.match.url}/about`}
          label="About"
        />
        <Route
          path={`${this.props.match.url}/home`}
          component={Home}
        />
        <Route
          path={`${this.props.match.url}/about`}
          component={About}
        />
      </div>
    );
  }
}