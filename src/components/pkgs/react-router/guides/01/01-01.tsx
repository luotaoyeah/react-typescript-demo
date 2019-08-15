/*
 * Philosophy: Dynamic Routing
 */

import React from 'react';
import { Button, Divider, Tag } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, Route, RouteComponentProps } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDashboardProps {}

class Dashboard extends React.Component<IDashboardProps & RouteComponentProps<any>> {
  public componentDidMount(): void {
    console.log(this.props);
  }

  public render(): React.ReactNode {
    return <Tag>DASHBOARD</Tag>;
  }
}

/**  */
function C0101(): React.ReactNode {
  return (
    <div>
      <Button>
        <Link to="/dashboard">Dashboard</Link>
      </Button>
      <Divider />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export { C0101 };
