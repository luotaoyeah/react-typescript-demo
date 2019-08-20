/*
 * Composition vs Inheritance: Specialization
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 有时候，需要在一个组件的基础上，个性化一些东西，
 * 形成一个新的组件，这个新的组件称之为原组件的特例（special case）；
 * 比如在 Button 的基础上，可以有 PrimaryButton，DangerButton 等；
 */

// eslint-disable-next-line react/prefer-stateless-function
class PrimaryButton extends React.Component {
  public render() {
    return <Button type="primary">PRIMARY</Button>;
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class DangerButton extends React.Component {
  public render() {
    return <Button type="danger">DANGER</Button>;
  }
}

class C011102 extends React.Component<{}, {}> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick() {
    console.log('click');
  }

  public render() {
    return (
      <div>
        <p>
          <PrimaryButton />
        </p>
        <p>
          <DangerButton />
        </p>
      </div>
    );
  }
}

export { C011102 };
