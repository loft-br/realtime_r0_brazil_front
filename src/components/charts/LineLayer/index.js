import React from 'react';
import { line } from 'd3-shape';

const LineLayer = ({ nodes, xScale, yScale }) => {
  const avgline = line()
    .x((d) => xScale(d.data.x))
    .y((d) => yScale(1));

  return <path stroke="#191F23" strokeWidth="1" d={avgline(nodes)} />;
};

export default LineLayer;
