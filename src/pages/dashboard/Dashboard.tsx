import type { FC } from 'react';
import React from 'react';

import { styled } from '@linaria/react';

import { AssetsCard } from 'components/pages/dashboard/AssetsCard';
import { BalanceCard } from 'components/pages/dashboard/BalanceCard';
import { OrdersCard } from 'components/pages/dashboard/OrdersCard';
import { Header } from 'pages/strategies/Header';

const Wrapper = styled.div`
  display: grid;
  row-gap: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
`;

interface Props {}

export const Dashboard: FC<Props> = (props) => {
  return (
    <Wrapper>
      <Header title="Portfolio overview" />
      <Content>
        <AssetsCard />
        <BalanceCard />
        <OrdersCard />
      </Content>
    </Wrapper>
  );
};
