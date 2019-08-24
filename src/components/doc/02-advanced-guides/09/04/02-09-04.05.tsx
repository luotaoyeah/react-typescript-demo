/*
 * https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored
 */
import React from 'react';

/*
 * children 可以是 true/false/null/undefined 这四个特殊的值, 但是它们不会被渲染到界面
 */
function C02090405() {
  return (
    <>
      <span>{true}</span>
      <span>{false}</span>
      <span>{null}</span>
      <span>{undefined}</span>
    </>
  );
}

export { C02090405 };
