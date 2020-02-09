// https://reactjs.org/docs/components-and-props.html#composing-components

import React from 'react';

interface IProps {
  children: string;
}

function C01(props: IProps): React.ReactElement<IProps> {
  return (
    <span style={{ border: '1px solid #ddd', borderRadius: '3px', padding: '8px 12px', marginRight: '10px' }}>
      {props.children}
    </span>
  );
}

/**
 * 整个应用就是无数的 component 组合成的一棵 component tree
 */
class ComposingComponentsComponent extends React.Component {
  public render() {
    return (
      <div>
        <C01>foo</C01>
        <C01>bar</C01>
        <C01>baz</C01>
      </div>
    );
  }
}

export { ComposingComponentsComponent };
