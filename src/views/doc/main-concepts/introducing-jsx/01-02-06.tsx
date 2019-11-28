import * as React from "react";

/*
 * JSX Prevents Injection Attacks
 */

/*
 * 默认情况下，JSX 中的任何表达式的值，
 * 都会被 ReactDOM 转义之后再进行渲染，避免发生 XSS；
 */
console.log("\n-------------------------------------------------- 01");

class C010206 extends React.Component {
  public render() {
    const message = "<script>{alert('hello')}</script>";
    return <div>{message}</div>;
  }
}

export { C010206 };
