import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Image } from './Image';
import { ImageService } from './ImageService';

interface RouteParam {
  id: string;
}

interface Props extends RouteComponentProps<RouteParam> {
  color: string;
}

interface State {
}

export class ImageView extends React.Component<Props, State> {
  render() {
    const image = ImageService.getImage(Number.parseInt(this.props.match.params.id, 10));
    if (!image) {
      return <div>Image not found</div>;
    }

    return (
      <div>
        <h1>{image.title}</h1>
        <Image color={image.color}/>
      </div>
    );
  }
}