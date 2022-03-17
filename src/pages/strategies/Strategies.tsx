import type { FC } from 'react';
import React, { useCallback } from 'react';

import { styled } from '@linaria/react';

import { useModals } from 'app/contexts/modals';
import { StrategyCard } from 'components/pages/strategies/common/StrategyCard';
import { Header } from 'pages/strategies/Header';

const Wrapper = styled.div`
  display: grid;
  row-gap: 20px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

interface Props {}

export const Strategies: FC<Props> = (props) => {
  const { openModal } = useModals();

  const handleLeverageClick = useCallback(() => {
    openModal('leverage');
  }, [openModal]);

  const handleSLTPClick = useCallback(() => {
    openModal('stake');
  }, [openModal]);

  return (
    <Wrapper>
      <Header title="Pre-made DEFI strategies" />
      <Content>
        <StrategyCard
          logo="leverage"
          title="Leveraged Position"
          description="Increase your margin by borrowing assets from the protocol."
          services={['orca', 'solaris']}
          onCardClick={handleLeverageClick}
        />
        <StrategyCard
          logo="sl_tp"
          title="Stop-Loss / Take-Profit"
          description="Create a limit order, which will be executed according to your target price."
          services={['aave', 'maker', 'compound']}
          onCardClick={handleSLTPClick}
        />
        <StrategyCard
          logo="lp"
          title="Liquidation Protection"
          description="Protect your positions on lending protocols from liquidation."
          services={['orca', 'solaris']}
          onCardClick={handleLeverageClick}
        />
      </Content>
    </Wrapper>
  );
};
