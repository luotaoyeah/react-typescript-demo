/*
 * Philosophy: Dynamic Routing
 */

import * as React from 'react';
import { Button, Divider, Tag } from 'antd';
import { Link, Route, RouteComponentProps } from 'react-router-dom';

interface IDashboardProps {}
class Dashboard extends React.Component<IDashboardProps & RouteComponentProps<any>> {
  componentDidMount(): void {
    console.log(this.props);
  }

  public render(): React.ReactNode {
    return <Tag>DASHBOARD</Tag>;
  }
}

/**  */
class C0101 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <Button>
          <Link to="/dashboard">Dashboard</Link>
        </Button>
        <Divider />
        <Route path={'/dashboard'} component={Dashboard} />
      </div>
    );
  }
}

export { C0101 };
