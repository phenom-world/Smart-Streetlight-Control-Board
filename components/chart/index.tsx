'use client';
import { Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};
const data = [
  {
    name: 'Day 1',
    energySaved: 24,
  },
  {
    name: 'Day 2',
    energySaved: 13.98,
  },
  {
    name: 'Day 3',
    energySaved: 98,
  },
  {
    name: 'Day 4',
    energySaved: 39.08,
  },
  {
    name: 'Day 5',
    energySaved: 48,
  },
  {
    name: 'Day 6',
    energySaved: 38,
  },
  {
    name: 'Day 7',
    energySaved: 43,
  },
];

const CustomizedAxisTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor='end' fill='#666' transform='rotate(-35)'>
        {payload.value}
      </text>
    </g>
  );
};

export function Chart() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        {...{
          overflow: 'visible',
        }}
      >
        <XAxis dataKey='name' tick={<CustomizedAxisTick />}>
          <Label value='Day of the week' dy={50} position='insideBottom' />
        </XAxis>
        <YAxis>
          <Label
            angle={-90}
            value='Energy Saved (kWh)'
            position='insideLeft'
            style={{ textAnchor: 'middle' }}
          />
        </YAxis>
        <Tooltip cursor={{ strokeDasharray: 5 }} />
        <Line type='monotone' dataKey='energySaved' stroke='#8884d8' activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
