/*
 * Context: Accessing Context in Lifecycle Methods
 */

import * as React from "react";
import ColorButton from "./ColorButton";
import { ColorContext } from "./ColorContext";

const COLORS = {
  red: "#ff0000",
  green: "#00ff00"
};

class C020307 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <ColorContext.Provider value={COLORS.green}>
          <ColorButton />
        </ColorContext.Provider>
      </div>
    );
  }
}

export { C020307 };
