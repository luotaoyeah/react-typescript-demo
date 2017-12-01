import * as React from 'react';

interface Props {
}

interface State {
  count: number;
}

export class SetState extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.forceUpdate(() => {
          console.log('forceUpdate().callback'); // tslint:disable-line
        });
      },
      3000
    );
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()'); // tslint:disable-line
  }

  render() {
    return (
      <div>
        {this.state.count}
      </div>
    );
  }
}