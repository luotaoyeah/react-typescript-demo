import React from 'react';
import Redirect from 'umi/redirect';
import { connect } from 'dva';
import pathToRegexp from 'path-to-regexp';
import Authorized from '@/utils/authorized';
// eslint-disable-next-line object-curly-newline
import { ConnectProps, ConnectState, Route, UserModelState } from '@/models/connect';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface AuthComponentProps extends ConnectProps {
  user: UserModelState;
}

// eslint-disable-next-line @typescript-eslint/array-type
const getRouteAuthority = (path: string, routeData: Route[]) => {
  // eslint-disable-next-line @typescript-eslint/array-type
  let authorities: string[] | string | undefined;
  routeData.forEach(route => {
    if (route.authority) {
      authorities = route.authority;
    }
    // match prefix
    if (pathToRegexp(`${route.path}(.*)`).test(path)) {
      // exact match
      if (route.path === path) {
        authorities = route.authority || authorities;
      }
      // get children authority recursively
      if (route.routes) {
        authorities = getRouteAuthority(path, route.routes) || authorities;
      }
    }
  });
  return authorities;
};

const AuthComponent: React.FC<AuthComponentProps> = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  route = {
    routes: [],
  },
  // eslint-disable-next-line react/prop-types
  location = {
    pathname: '',
  },
  // eslint-disable-next-line react/prop-types
  user,
}) => {
  const { currentUser } = user;
  const { routes = [] } = route;
  const isLogin = currentUser && currentUser.name;
  return (
    <Authorized
      authority={getRouteAuthority(location.pathname, routes) || ''}
      noMatch={isLogin ? <Redirect to="/exception/403" /> : <Redirect to="/user/login" />}
    >
      {children}
    </Authorized>
  );
};

export default connect(({ user }: ConnectState) => ({
  user,
}))(AuthComponent);
