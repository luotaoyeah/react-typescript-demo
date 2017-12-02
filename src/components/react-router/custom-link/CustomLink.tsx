import * as React from 'react';
import {
  Link,
  Route,
  RouteComponentProps
} from 'react-router-dom';
import { Icon } from 'antd';

interface Props {
  to: string;
  label: string;
  exact?: boolean;
}

interface State {
}

export class CustomLink extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Route
        path={this.props.to}
        children={({ match }: RouteComponentProps<any>) => (
          <div>
            <Link
              to={this.props.to}
              style={
                {
                  color: match ? 'red' : '#000000',
                  textDecoration: 'none'
                }
              }
            >
              {match && <Icon type="check"/>}{this.props.label}
            </Link>
          </div>
        )}
      />
    );
  }
}