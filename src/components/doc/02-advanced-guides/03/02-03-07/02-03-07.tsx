/*
 * Context: Accessing Context in Lifecycle Methods
 */

import React from 'react';
import ColorButton from './ColorButton';
import { ColorContext } from './color-context';

const COLORS = {
  red: '#FF0000',
  green: '#00FF00',
};

function C020307() {
  return (
    <div>
      <ColorContext.Provider value={COLORS.green}>
        <ColorButton />
      </ColorContext.Provider>
    </div>
  );
}

export { C020307 };
