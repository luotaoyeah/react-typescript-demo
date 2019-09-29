/*
 * Hooks at a Glance
 *     Building Your Own Hooks
 */

import React, { useEffect, useState } from "react";
import { Button, Divider } from "antd";

/*
 * 除了 react 内置的一些 hooks 之外，如：useState()，useEffect() 等等，
 * 我们可以创建自定义的 hook 函数，
 * 根据惯例，
 *     当一个 function 的名称是类似于 useSomething 的形式，
 *     且在该 function 中使用了其他的 hook 函数，
 * 那么这个 function 就是一个 hook 函数
 */

/**
 *
 * @param init
 */
function useStatus(init: boolean = false): [boolean, (status: boolean | ((prevState: boolean) => boolean)) => void] {
  const [status, setStatus] = useState<boolean>(init);

  useEffect(() => {
    console.log(status);
  });

  return [status, setStatus];
}

function F01(): React.ReactElement<{}> {
  const [status01, setStatus01] = useStatus(true);
  const [status02, setStatus02] = useStatus(false);

  return (
    <div>
      <Button
        onClick={() => {
          setStatus01((prevStatus: boolean) => {
            return !prevStatus;
          });
        }}
      >
        {String(status01).toUpperCase()}
      </Button>
      <Divider />
      <Button
        onClick={() => {
          setStatus02((prevStatus: boolean) => {
            return !prevStatus;
          });
        }}
      >
        {String(status02).toUpperCase()}
      </Button>
    </div>
  );
}

class C04020401 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04020401 };
