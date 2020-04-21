import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flex: 1,
    width: '100%',
    maxWidth: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const commonProps = {
  width: 300,
  height: 200,
  margin: { top: 10, right: 30, bottom: 10, left: 10 },
  nodeSize: 5,
  blendMode: 'normal',
  yScale: {
    type: 'linear',
    max: 5,
  },
  xScale: { type: 'time' },
  xFormat: (d) => `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()}`,
  yFormat: (d) => d.toFixed(2),
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
  // colors: '#ff774a',
  colors: '#E17272',
};

export default useStyles;
