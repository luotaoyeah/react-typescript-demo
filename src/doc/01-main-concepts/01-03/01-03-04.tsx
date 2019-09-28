import * as React from "react";
import * as ReactDOM from "react-dom";

/*
 * React Only Updates What’s Necessary
 */

/*
 * 虽然每次循环都重新创建了一个全新的 element，
 * 但是 ReactDOM 在更新 DOM 之前，会比较本次的 element 和上次的 element，
 * 然后只会更新需要更新的那部分 DOM；
 *
 * 这里面涉及到的理念是：
 *     我们只需要考虑当前的 UI 应该怎样呈现，而不需要考虑 UI 应该如何随着时间变更；
 */
console.log("\n-------------------------------------------------- 01");

setInterval(() => {
  ReactDOM.render(
    <div>
      <h1>hello world</h1>
      <h1>{new Date().toISOString()}</h1>
    </div>,
    document.getElementById("root02")
  );
}, 1000);
