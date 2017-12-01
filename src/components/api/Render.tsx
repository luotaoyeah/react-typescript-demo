import * as React from 'react';

interface Props {
  color?: string;
  time?: number;
}

interface State {
  color: string;
}

export class Render extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      color: props.color || 'red'
    };
  }

  componentDidMount() {
    // const instance = ReactDOM.findDOMNode(this);
    // console.log(instance); // tslint:disable-line
  }

  componentWillReceiveProps(nextProps: Props) {
    // console.log('componentWillReceiveProps:', nextProps.time); // tslint:disable-line
  }

  shouldComponentUpdate() {
    // console.log('shouldComponentUpdate:'); // tslint:disable-line
    return true;
  }

  render() {
    return (
      <>
      <div key="A">A</div>
      <p key="B">B</p>
      after
      </>
    );
  }
}