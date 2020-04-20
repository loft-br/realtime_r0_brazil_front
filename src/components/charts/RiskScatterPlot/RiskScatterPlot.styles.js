import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const commonProps = {
  width: 300,
  height: 200,
  margin: { top: 10, right: 30, bottom: 25, left: 10 },
  nodeSize: 5,
  blendMode: 'normal',
  yScale: {
    type: 'linear',
    max: 5,
  },
  xFormat: (d) => d,
  yFormat: (d) => d.toFixed(1),
  enableGridX: false,
  axisBottom: {
    type: 'time',
    tickValues: 5,
    orient: 'bottom',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: -90,
    format: (d) => d,
  },
  axisTop: null,
  axisLeft: null,
  axisRight: {
    orient: 'left',
    tickSize: 5,
    tickValues: 5,
    tickPadding: 5,
    tickRotation: 0,
    format: (d) => d.toFixed(1),
  },
  legends: [
    {
      anchor: 'bottom-right',
      direction: 'row',
      translateY: 60,
      itemWidth: 130,
      itemHeight: 12,
      symbolSize: 12,
      symbolShape: 'circle',
    },
  ],
  colors: '#ff774a',
};

export default useStyles;
