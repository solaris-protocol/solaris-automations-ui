import React, { FC } from 'react';

import { useWallet, useWalletKit } from '@gokiprotocol/walletkit';

import { Button } from '../Button';

interface Props {
  children: React.ReactNode;
}

export const ButtonConnect: FC<Props> = ({ children }) => {
  const { connect } = useWalletKit();
  const { connected } = useWallet();

  if (!connected) {
    return (
      <Button onClick={connect} className="full">
        Connect
      </Button>
    );
  }

  return <>{children}</>;
};
