import * as React from "react";
import * as ReactDOM from "react-dom";

/*
 * Updating the Rendered Element
 */

/*
 * React 的 element 是 immutable 的，即一个 element 创建之后，
 * 无法再修改它的 attributes 和 children；
 *
 * 要更新某个 element 的渲染结果，我们可以创建一个新的 element，
 * 然后再次调用 ReactDOM.render() 方法，重新渲染该 element；
 */

/*
 * 在实际情况下，一个应用通常只会调用 ReactDOM.render() 一次；
 */
console.log("\n-------------------------------------------------- 01");

setInterval(() => {
  ReactDOM.render(
    <h1>{new Date().toISOString()}</h1>,
    document.getElementById("root02")
  );
}, 1000);
