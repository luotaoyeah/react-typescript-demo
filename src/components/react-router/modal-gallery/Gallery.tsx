import React from 'react';
import {
  Link,
  RouteComponentProps
} from 'react-router-dom';
import { Thumbnail } from './Thumbnail';
import { ImageService } from './ImageService';

interface RouteParam {
}

interface Props extends RouteComponentProps<RouteParam> {
}

interface State {
}

export class Gallery extends React.Component<Props, State> {
  render() {
    return (
      <div>
        {ImageService.images.map(image => (
          <Link
            key={image.id}
            to={{
              pathname: `${this.props.match.url}/img/${image.id}`,
              state: { modal: true }
            }}
          >
            <Thumbnail color={image.color}/>
            <p>{image.title}</p>
          </Link>
        ))}
      </div>
    );
  }
}