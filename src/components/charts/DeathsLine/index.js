import React from 'react';
import { Line } from '@nivo/line';

import TooltipDeathsLine from './TooltipDeathsLine';

const commonProps = {
  width: 300,
  height: 200,
  margin: { top: 10, right: 30, bottom: 10, left: 10 },
  animate: true,
  enableGridX: false,
  axisBottom: null,
  axisTop: null,
  axisLeft: null,
  axisRight: {
    orient: 'left',
    tickSize: 5,
    tickValues: 5,
    tickPadding: 5,
    tickRotation: 0,
  },
};

const styleById = {
  new: {
    strokeDasharray: '1, 3',
    strokeWidth: 2,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
  },
  default: {
    strokeWidth: 2,
  },
};

const DashedLine = ({ series, lineGenerator, xScale, yScale }) => {
  return series.map(({ id, data, color }) => (
    <path
      key={id}
      d={lineGenerator(
        data.map((d) => ({
          x: xScale(d.data.x),
          y: yScale(d.data.y),
        }))
      )}
      fill="none"
      stroke={color}
      style={styleById[id] || styleById.default}
    />
  ));
};

const DeathsLine = ({ data }) => (
  <Line
    {...commonProps}
    data={data}
    curve="monotoneX"
    useMesh
    layers={['grid', DashedLine, 'axes', 'mesh']}
    colors={['#20A483', '#aaa']}
    tooltip={({ point, serieId }) =>
      serieId === 'smoothed' ? null : <TooltipDeathsLine data={point?.data} />
    }
  />
);

export default DeathsLine;
