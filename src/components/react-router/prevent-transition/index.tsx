import React from 'react';
import { RouteComponentProps } from 'react-router';
import { FormPage } from './FormPage';
import { OtherPage } from './OtherPage';
import {
  Link,
  Route
} from 'react-router-dom';

interface Props {
}

interface State {
}

export default class PreventTransition extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>PreventTransition</h1>

        <ol
          style={
            {
              listStyle: 'initial'
            }
          }
        >
          <li><Link to={`${this.props.match.url}/form`}>Form</Link></li>
          <li><Link to={`${this.props.match.url}/other`}>Other</Link></li>
        </ol>

        <Route
          path={`${this.props.match.url}/form`}
          component={FormPage}
        />
        <Route
          path={`${this.props.match.url}/other`}
          component={OtherPage}
        />
      </div>
    );
  }
}