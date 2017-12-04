import React from 'react';
import { ClickComponent } from './ClickComponent';
import { clickable } from './HOCClickable';
import {
  OtherComponent,
  Props as OtherComponentProps
} from './OtherComponent';

const ClickOtherComponent = clickable<OtherComponentProps>(OtherComponent);

interface Props {
}

interface State {
}

export default class ChapterIndex extends React.Component<Props, State> {
  otherComponentRef: HTMLElement | null;

  render() {
    return (
      <div>
        <ClickComponent
          message={'i am some message'}
          handleClick={(displayName: string) => {
            console.log(`${displayName}: clickable`); // tslint:disable-line
          }}
        />
        <ClickOtherComponent
          handleClick={
            (displayName: string) => {
              console.log('otherComponentRef', this.otherComponentRef); // tslint:disable-line
              console.log(displayName + ': clickable'); // tslint:disable-line
            }
          }
          age={18}
          inputRef={
            (element: HTMLDivElement) => {
              this.otherComponentRef = element;
            }
          }
        />
      </div>
    );
  }
}