import * as React from 'react';
import {
  Route,
  RouteComponentProps
} from 'react-router-dom';
import { ModalSwitch } from './ModalSwitch';

interface Props {
}

interface State {
}

export default class ModalGallery extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>ModalGallery</h1>

        <Route component={ModalSwitch}/>
      </div>
    );
  }
}