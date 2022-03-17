import type { FC } from 'react';
import React from 'react';

import { styled } from '@linaria/react';

import { DashboardCard } from '../common/DashboardCard';

const DashboardCardStyled = styled(DashboardCard)`
  min-width: 500px;
  padding: 20px;

  table {
    width: 100%;

    color: #fff;
    text-align: left;

    border-collapse: separate;
    border-spacing: 0 10px;
  }

  table th,
  table td {
    padding: 0 15px;

    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
  }

  table th {
    color: rgba(255, 255, 255, 0.5);
  }

  table td {
    height: 40px;

    color: #fff;

    border-color: rgba(160, 119, 176, 0.2);
    border-style: solid;
    border-width: 0;
    border-top-width: 1px;
    border-bottom-width: 1px;
  }

  table td:first-of-type {
    border-left-width: 1px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  table td:last-of-type {
    border-right-width: 1px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const Time = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

interface Props {}

export const OrdersCard: FC<Props> = (props) => {
  return (
    <DashboardCardStyled title="Orders History">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Size</th>
            <th>Price</th>
            <th>S/L</th>
            <th>T/P</th>
          </tr>
        </thead>
        <tbody>
          {new Array(5).fill(1).map((_, i) => (
            <tr key={i}>
              <td>
                2.21.2022 <Time>10:12:15 AM</Time>
              </td>
              <td>250.00</td>
              <td>90.70</td>
              <td>10%</td>
              <td>10%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardCardStyled>
  );
};
