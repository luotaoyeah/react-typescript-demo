import React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps
} from 'react-router';
import { NavLink } from './NavLink';
import { CSSTransitionGroup } from 'react-transition-group';
import { HSL } from './HSL';

interface Props {
}

interface State {
}

export default class AnimateTransition extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>AnimateTransition</h1>
        <Route
          render={({ location }: RouteComponentProps<any>) => (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50px',
                bottom: 0
              }}
            >
              <Route
                exact={true}
                path={`${this.props.match.url}/`}
                render={() => (
                  <Redirect to={`${this.props.match.url}/10/90/50`}/>
                )}
              />

              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  position: 'absolute',
                  top: '50px',
                  height: '40px',
                  width: '100%',
                  display: 'flex'
                }
                }
              >
                <NavLink to={`${this.props.match.url}/10/90/50`}>Red</NavLink>
                <NavLink to={`${this.props.match.url}/120/100/40`}>Green</NavLink>
                <NavLink to={`${this.props.match.url}/200/100/40`}>Blue</NavLink>
                <NavLink to={`${this.props.match.url}/310/100/50`}>Pink</NavLink>
              </ul>

              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  top: '90px',
                  textAlign: 'center'
                }}
              >
                <CSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={1000}
                >
                  <Route
                    location={location}
                    key={location.key}
                    path={`${this.props.match.url}/:h/:s/:l`}
                    component={HSL}
                  />
                </CSSTransitionGroup>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}