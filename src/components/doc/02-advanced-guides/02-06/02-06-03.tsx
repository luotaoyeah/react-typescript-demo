/*
 * Fragments: Usage
 */

import * as React from 'react';

class C020603 extends React.Component {
  public render(): React.ReactNode {
    /*
     * React.Fragment 可以设置一个属性 key，
     * 但是其简写形式 <></> 不支持设置任何属性；
     */
    const tds = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }].map(i => (
      <React.Fragment key={i.id}>
        <dt>{i.id}</dt>
        <dd>{i.name}</dd>
      </React.Fragment>
    ));

    return (
      <div>
        <dl>{tds}</dl>
      </div>
    );
  }
}

export { C020603 };
