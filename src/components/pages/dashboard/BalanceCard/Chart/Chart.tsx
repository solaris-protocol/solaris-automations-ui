import React, { FC, useMemo } from 'react';

import { curveMonotoneX } from '@visx/curve';
import { LinearGradient } from '@visx/gradient';
import { scaleLinear, scaleTime } from '@visx/scale';
import { AreaClosed, LinePath } from '@visx/shape';
import { extent, max } from 'd3-array';

type CharDataItem = { time: string; price: number };
type ChartData = CharDataItem[];

const getDate = (d: CharDataItem): Date => new Date(d.time);
const getValue = (d: CharDataItem): number => d.price;

interface Props {
  data: ChartData;
  parentWidth?: number;
  parentHeight?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

export const Chart: FC<Props> = ({
  data,
  parentWidth = 600,
  parentHeight = 237,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
}) => {
  const innerWidth = parentWidth - margin.left - margin.right;
  const innerHeight = parentHeight - margin.top - margin.bottom;

  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [margin.left, innerWidth + margin.left],
        domain: extent(data, getDate) as [Date, Date],
      }),
    [data, innerWidth, margin.left]
  );
  const valueScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [0, (max(data, getValue) || 0) + innerHeight / 3],
        nice: true,
      }),
    [innerHeight, margin.top, data]
  );

  console.log(111, data);

  return (
    <div>
      <svg width={innerWidth} height={innerHeight}>
        <LinearGradient id="stroke-gradient" from="#00FFA3" to="#02CCFC" />
        <LinearGradient
          id="area-gradient"
          from="rgba(0, 255, 163, 0.332)"
          fromOffset="-15.36%"
          to="rgba(2, 204, 252, 0.008)"
          toOffset="92.83%"
        />
        <LinePath
          data={data}
          x={(d) => dateScale(getDate(d)) ?? 0}
          y={(d) => valueScale(getValue(d)) ?? 0}
          stroke="url(#stroke-gradient)"
          strokeWidth={3}
          shapeRendering="geometricPrecision"
          curve={curveMonotoneX}
        />
        <AreaClosed
          data={data}
          x={(d) => dateScale(getDate(d)) ?? 0}
          y={(d) => valueScale(getValue(d)) ?? 0}
          yScale={valueScale}
          fill="url(#area-gradient)"
          curve={curveMonotoneX}
        />
      </svg>
    </div>
  );
};
