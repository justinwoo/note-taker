import * as React from 'react';

import {
  sheetWidth,
  lineHeight,
  offset
} from '../../globals';

export function createLine(rowNo) {
  var height = lineHeight * rowNo + offset;
  return (
    <line key={rowNo} x1="0" y1={height} x2={sheetWidth} y2={height} strokeWidth="2" stroke="black" />
  );
}

export function createStrikethrough() {
  return (
    <line x1={-2} y1={5} x2={20} y2={5} strokeWidth="2" stroke="black" />
  );
}
