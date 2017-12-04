import * as React from 'react';

interface Props {
}

interface State {
}

export class ContentEditable extends React.Component<Props, State> {
  render() {
    return (
      <div
        contentEditable={true}
        suppressContentEditableWarning={true}
        custom-attribute="hello world"
      >
        TODO
      </div>
    );
  }
}