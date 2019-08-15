/*
 * Using the State Hook
 *     Hooks and Function Components
 */

import React, { useState } from 'react';
import { Button } from 'antd';

/*
 * 在 hooks 出现之前，function 组件又称为 stateless 组件，
 * 然而有了 hooks 之后，在 function 组件中也可以使用 state 了，
 * 并且 hooks 只能在 function 组件中使用，不能在 class 组件中使用
 */

const F01 = (): React.ReactElement<{}> => {
  const [count, setCount] = useState<number>(0);

  return (
    <Button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </Button>
  );
};

function C04030201(): React.ReactNode {
  return (
    <div>
      <F01 />
    </div>
  );
}

export { C04030201 };
