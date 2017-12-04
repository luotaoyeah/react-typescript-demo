import * as React from 'react';
import { SyntheticEvent } from 'react';
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

export class ModalView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   *
   * @param {React.SyntheticEvent<HTMLElement>} e
   */
  goBack(e: SyntheticEvent<HTMLElement>) {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    const image = ImageService.getImage(Number.parseInt(this.props.match.params.id, 10));
    if (!image) {
      return null;
    }

    return (
      <div
        onClick={this.goBack}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.15)'
        }}
      >
        <div
          className="modal"
          style={{
            position: 'absolute',
            background: '#fff',
            top: 25,
            left: '10%',
            right: '10%',
            padding: 15,
            border: '2px solid #444'
          }}
        >
          <h1>{image.title}</h1>
          <Image color={image.color}/>
          <button
            type="button"
            onClick={this.goBack}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}