import React, { FC } from 'react';

import { styled } from '@linaria/react';
import { Token } from '@saberhq/token-utils';

import WalletIcon from 'assets/icons/wallet-icon.svg';
import { ButtonMax } from 'components/common/ButtonMax';
import { StakeReceiveTitle } from 'components/modals/stakeModals/common/styled';
import { formatNumber } from 'utils/utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const WalletBalance = styled.div`
  display: flex;
  align-items: center;
  margin-right: 17px;

  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.02em;
`;

// @ts-ignore
const WalletIconStyled = styled(WalletIcon)`
  width: 20px;
  margin-right: 10px;
`;

const ButtonMaxStyled = styled(ButtonMax)`
  color: #907a99 !important;

  background: linear-gradient(147.79deg, #0e090f 0%, #170f18 100%);
  border-color: #907a99;

  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  token: Token | null | undefined;
}

export const YouStake: FC<Props> = ({ token }) => {
  return (
    <Wrapper>
      <Column>
        <StakeReceiveTitle>You stake</StakeReceiveTitle>
        {/*<APY apy={apy} isActive={state === 'deposit'} />*/}
      </Column>
      <Column>
        <WalletBalance title={String(111)}>
          {/*// @ts-ignore */}
          <WalletIconStyled />
          {formatNumber.format(11)}
        </WalletBalance>
        <ButtonMaxStyled />
      </Column>
    </Wrapper>
  );
};
