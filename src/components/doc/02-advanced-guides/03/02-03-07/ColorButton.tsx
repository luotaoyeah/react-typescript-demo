import React from 'react';
import { ColorContext } from './color-context';

function ColorButton({ color }: { color: string }) {
  return (
    <button
      type="button"
      style={{
        color,
        borderRadius: '3px',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      {color}
    </button>
  );
}

/*
 * 将 Context 的值作为 props 传入组件，
 * 在组件中就可以像使用普通的 props 一样，使用这些值；
 */
export default (props: {}): JSX.Element => (
  <ColorContext.Consumer>{(color: string) => <ColorButton {...props} color={color} />}</ColorContext.Consumer>
);
