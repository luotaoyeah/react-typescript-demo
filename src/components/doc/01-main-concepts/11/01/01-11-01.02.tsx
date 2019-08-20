/*
 * https://reactjs.org/docs/composition-vs-inheritance.html#containment
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 如果需要传入多个部分的内容, 仅仅使用 children 已经不够了, 我们可以自定义任意的 prop 属性用来传入内容
 */
function C01110102A({
  head,
  body,
  children,
}: {
  children?: React.ReactNode;
  head?: React.ReactNode;
  body?: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderRadius: '3px',
        border: '2px solid red',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <div>{head}</div>

      <div>{body}</div>

      <div>{children}</div>
    </div>
  );
}

function C01110102() {
  return (
    <>
      <C01110102A head={<Button>HEAD</Button>} body={<Button>BODY</Button>}>
        <Button>CHILDREN</Button>
      </C01110102A>
    </>
  );
}

export { C01110102 };
