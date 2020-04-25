import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import LineLayer from '../LineLayer';
import TooltipLine from './TooltipLine';

const commonProperties = {
  width: 1200,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
  enableSlices: 'x',
};

const compare = (a, b) => {
  const firstY = a.y;
  const secondY = b.y;

  let comparison = 0;

  if (firstY > secondY) {
    comparison = 1;
  } else if (firstY < secondY) {
    comparison = -1;
  }

  return comparison;
};

const CustomSymbol = ({ size, color, borderWidth, borderColor, ...rest }) => {
  const height = (rest.datum.high - rest.datum.low) * 100;

  return (
    <g>
      <rect
        width={8}
        rx="5"
        x="-4"
        height={height}
        y={(-(rest.datum.high - rest.datum.low) * 100) / 2}
        opacity="0.2"
        fill="#ff774a"
      />
      <div>{rest.datum.id}</div>
      <circle
        fill="#fff"
        r={size / 2}
        strokeWidth={borderWidth}
        stroke={rest.datum.y > 1 ? '#ff774a' : '#19857b'}
      />
      <circle
        r={size / 5}
        strokeWidth={borderWidth}
        stroke={rest.datum.y > 1 ? '#ff774a' : '#19857b'}
        fill={rest.datum.y > 1 ? '#ff774a' : '#19857b'}
        fillOpacity={0.35}
      />
    </g>
  );
};

const Line = ({ data }) => {
  const mapper = {
    positive: [],
    negative: [],
  };

  const orderedData = data.sort(compare);

  orderedData.forEach((item, index) => {
    if (item.y < 1) {
      mapper.negative[index] = {
        ...item,
        x: index,
      };
      mapper.positive[index] = {
        ...item,
        x: index,
        y: null,
      };
    } else {
      mapper.positive[index] = {
        ...item,
        x: index,
      };
      mapper.negative[index] = {
        ...item,
        x: index,
        y: null,
      };
    }
  });

  const chartData = [
    {
      id: 'positive',
      data: mapper.positive,
    },
    {
      id: 'negative',
      data: mapper.negative,
    },
  ];

  return (
    <ResponsiveLine
      {...commonProperties}
      data={chartData}
      curve="monotoneX"
      enablePointLabel
      pointSymbol={CustomSymbol}
      pointLabel="id"
      pointSize={14}
      pointBorderWidth={1}
      pointBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.3]],
      }}
      pointLabelYOffset={-20}
      enableGridX={false}
      colors={['#ff774a', '#19857b']}
      xScale={{
        type: 'linear',
      }}
      yScale={{
        type: 'linear',
        stacked: false,
        min: 0,
        max: 4,
      }}
      axisLeft={{
        format: (d) => d.toFixed(1),
      }}
      tooltip={({ point }) => <TooltipLine data={point?.data} />}
      enableArea={true}
      areaOpacity={0.0}
      enableSlices={false}
      useMesh={true}
      crosshairType="cross"
      lineWidth={0}
      layers={[
        'grid',
        LineLayer,
        'axes',
        'markers',
        'areas',
        'lines',
        'points',
        'slices',
        'mesh',
        'legends',
      ]}
    />
  );
};

export default Line;
