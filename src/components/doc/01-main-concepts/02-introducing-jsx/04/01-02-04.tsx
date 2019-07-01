import React from 'react';
import { Button, Divider } from 'antd';

/**
 * https://reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx
 */
function C010204(): React.ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const id: string = 'id_01_02_04';

  return (
    <>
      <p>
        跟 <code>HTML</code> 类似, <code>JSX</code> 中可以设置 <code>attribute</code>
      </p>

      <p>
        <code>JSX</code> 中的 <code>attribute</code> 有两种设置方式:
      </p>
      <ul>
        <li>
          一种是 <code>someProp=&#34;someValue&#34;</code>, 后面的值是一个普通的字符串
        </li>
        <li>
          一种是{' '}
          <code>
            someProp={'{'}someExpression{'}'}
          </code>
          , 后面的值是一个表达式
        </li>
      </ul>

      <p>
        跟 <code>HTML</code> 不一样的是, 因为 <code>JSX</code> 实际上是 <code>JavaScript</code>,
        因此 <code>JSX</code> 中的属性实际上对应的是 <code>DOM</code> 的 <code>property</code>,
        而不是 <code>HTML</code> 的 <code>attribute</code>
      </p>

      <Divider dashed></Divider>

      <Button id={id} className="class-01">
        FOO
      </Button>
    </>
  );
}

export { C010204 };
