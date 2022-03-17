import { FC, useMemo, useState } from 'react';
import React, { useEffect } from 'react';

import { styled } from '@linaria/react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import classNames from 'classnames';

import { DashboardCard } from '../common/DashboardCard/DashboardCard';
import { Chart } from './Chart';

const DashboardCardStyled = styled(DashboardCard)`
  grid-gap: 20px;
  padding: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  letter-spacing: 0.02em;
`;

const BalanceWrapper = styled.div`
  display: grid;
  grid-gap: 6px;
`;

const Balance = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
`;

const Diff = styled.div`
  color: #00ffa3;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const IntervalSelector = styled.div`
  display: flex;

  border: 1px solid rgba(144, 122, 153, 0.2);
  border-radius: 5px;
`;

const IntervalButton = styled.button`
  padding: 10px 14px;

  color: #907a99;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;

  border: 1px solid transparent;
  cursor: pointer;

  &:not(:last-child) {
    border-right-color: rgba(144, 122, 153, 0.2);
  }

  &.active {
    color: #fff;

    border-color: #907a99;
    border-radius: 5px;
  }
`;

const ChartTypes = {
  '1h': '1 h',
  '1d': '1 d',
  '1w': '1 w',
  '1m': '1 m',
  all: 'all',
};

interface Props {}

export const BalanceCard: FC<Props> = (props) => {
  const [data, setData] = useState({ bpi: [] });
  const [type, setType] = useState(ChartTypes.all);

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
      });
  }, []);

  const prices = useMemo(() => {
    if (!data.bpi) {
      return undefined;
    }

    return Object.entries(data.bpi).map(([time, price]) => ({
      time,
      price,
    }));
  }, [data.bpi]);

  if (!prices) {
    return <div>loading...</div>;
  }

  return (
    <DashboardCardStyled>
      <Top>
        <BalanceWrapper>
          <Balance>$74,350.35</Balance>
          <Diff>+4.04% ($2,702.12)</Diff>
        </BalanceWrapper>
        <div>
          <IntervalSelector>
            {Object.entries(ChartTypes).map(([chartType, chartLabel]) => (
              <IntervalButton
                key={chartType}
                onClick={() => setType(chartType)}
                className={classNames({ active: type === chartType })}
              >
                {chartLabel}
              </IntervalButton>
            ))}
          </IntervalSelector>
        </div>
      </Top>
      <ParentSize>{({ width, height }) => <Chart data={prices} parentWidth={width} parentHeight={272} />}</ParentSize>
    </DashboardCardStyled>
  );
};
