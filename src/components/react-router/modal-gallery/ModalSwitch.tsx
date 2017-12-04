import React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch
} from 'react-router-dom';
import History from 'history';
import { Gallery } from './Gallery';
import { ModalView } from './ModalView';
import { Home } from './Home';
import { ImageView } from './ImageView';

interface RouteParam {
}

interface Props extends RouteComponentProps<RouteParam> {
}

interface State {
}

export class ModalSwitch extends React.Component<Props, State> {
  /**
   *
   * @type {Location}
   */
  previousLocation: History.Location = this.props.location;

  componentWillUpdate(nextProps: Props) {
    const { location } = this.props;
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route
            exact={true}
            path={`${this.props.match.url}/`}
            component={Home}
          />
          <Route
            path={`${this.props.match.url}/gallery`}
            component={Gallery}
          />
          <Route
            path={`${this.props.match.url}/img/:id`}
            component={ImageView}
          />
        </Switch>
        {
          isModal ?
            <Route
              path={`${this.props.match.url}/gallery/img/:id`}
              component={ModalView}
            />
            :
            null
        }
      </div>
    );
  }
}