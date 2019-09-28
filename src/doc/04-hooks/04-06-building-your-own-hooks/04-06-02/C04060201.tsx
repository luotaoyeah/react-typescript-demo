/*
 * Building Your Own Hooks
 *     Tip: Pass Information Between Hooks
 */

import React, { useEffect, useState } from "react";
import { Button, Select } from "antd";

/*
 * 不同的 hooks 之间可以相互传递数据，
 * 比如将一个 hook 的返回值，作为另一个 hook 的参数
 */

/**
 *
 * @param id
 * @return {boolean}
 */
function useStatus(id: number) {
  const [online, setOnline] = useState<boolean>(false);

  useEffect(() => {
    console.log("useEffect", id, online);
    setOnline(id % 2 === 0);
  }, [id]);

  return online;
}

/**
 *
 * @return {any}
 */
function F01(): React.ReactElement<{}> {
  const [id, setId] = useState<number>(1);
  const online = useStatus(id);

  return (
    <div>
      <Button
        style={{
          verticalAlign: "bottom",
          color: online ? "#52c41a" : "#f5222d"
        }}
      >
        {online ? "ON" : "OFF"}
      </Button>{" "}
      <Select
        value={id}
        onChange={(value: number) => {
          setId(value);
        }}
      >
        <Select.Option value={1}>A</Select.Option>
        <Select.Option value={2}>BBB</Select.Option>
        <Select.Option value={3}>C</Select.Option>
        <Select.Option value={4}>DDD</Select.Option>
      </Select>
    </div>
  );
}

class C04060201 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04060201 };
