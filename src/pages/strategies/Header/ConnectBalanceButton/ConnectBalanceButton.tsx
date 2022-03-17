import type { FC } from 'react';
import React from 'react';

import { useWallet, useWalletKit } from '@gokiprotocol/walletkit';
import { styled } from '@linaria/react';
import { useNativeAccount } from '@saberhq/sail';

import WalletIcon from 'assets/icons/wallet-icon.svg';

import { Button } from '../common/styled';

const ButtonStyled = styled(Button)`
  &.connect {
    color: #907a99;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

// @ts-ignore
const WalletIconStyled = styled(WalletIcon)`
  width: 15px;
  margin-right: 15px;
`;

interface Props {}

export const ConnectBalanceButton: FC<Props> = (props) => {
  const { connect } = useWalletKit();
  const { connected } = useWallet();
  const { nativeBalance } = useNativeAccount();

  if (!connected) {
    return (
      <ButtonStyled onClick={connect} className="connect">
        {/*// @ts-ignore */}
        <WalletIconStyled /> Connect wallet
      </ButtonStyled>
    );
  }

  return (
    <ButtonStyled>
      {/*// @ts-ignore */}
      <WalletIconStyled /> {nativeBalance?.formatUnits()}
    </ButtonStyled>
  );
};
