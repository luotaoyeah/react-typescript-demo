import * as React from 'react';
import { Render } from './Render';
import { RouteComponentProps } from 'react-router-dom';

interface Props {
}

interface State {
}

export default class ChapterIndex extends React.Component<Props & RouteComponentProps<any>, State> {
  componentDidMount() {
    console.log(this.props.history); // tslint:disable-line
    /*  */
  }

  render() {
    return (
      <div className="container">
        <Render/>
      </div>
    );
  }
}