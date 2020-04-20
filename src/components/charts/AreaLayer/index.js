import React from 'react';
import { area, curveMonotoneX } from 'd3-shape';

const AreaLayer = ({ nodes, xScale, yScale }) => {
  const areaGenerator = area()
    .x((d) => xScale(d.data.x))
    .y0((d) => yScale(d.data.low))
    .y1((d) => yScale(d.data.high))
    .curve(curveMonotoneX);

  return <path d={areaGenerator(nodes)} fill="rgba(255, 119, 74, 0.2)" />;
};

export default AreaLayer;
