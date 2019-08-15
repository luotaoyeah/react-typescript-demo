import React from 'react';
import check, { IAuthorityType } from './check-permissions';

// eslint-disable-next-line import/no-cycle
import AuthorizedRoute from './authorized-route';
import Secured from './secured';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface AuthorizedProps {
  authority: IAuthorityType;
  noMatch?: React.ReactNode;
}

type IAuthorizedType = React.FunctionComponent<AuthorizedProps> & {
  Secured: typeof Secured;
  check: typeof check;
  AuthorizedRoute: typeof AuthorizedRoute;
};

const Authorized: React.FunctionComponent<AuthorizedProps> = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  authority,
  // eslint-disable-next-line react/prop-types
  noMatch = null,
}) => {
  const childrenRender = typeof children === 'undefined' ? null : children;
  const dom = check(authority, childrenRender, noMatch);
  return <>{dom}</>;
};

export default Authorized as IAuthorizedType;
