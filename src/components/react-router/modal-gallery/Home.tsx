import React from 'react';
import {
  Link,
  RouteComponentProps
} from 'react-router-dom';

interface RouteParam {

}

interface Props extends RouteComponentProps<RouteParam> {
}

interface State {
}

export class Home extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/gallery`}>Visit the Gallery</Link>
        <h2>Featured Images</h2>
        <ul>
          <li><Link to={`${this.props.match.url}/img/2`}>Tomato</Link></li>
          <li><Link to={`${this.props.match.url}/img/4`}>Crimson</Link></li>
        </ul>
      </div>
    );
  }
}