import type { FC } from 'react';
import React from 'react';

import { styled } from '@linaria/react';
import { useToken } from '@saberhq/sail';

import { AssetRow } from './AssetRow';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;

interface Props {}

export const AssetsList: FC<Props> = (props) => {
  const SOL = useToken('So11111111111111111111111111111111111111112');
  const USDC = useToken('4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU');

  return (
    <Wrapper>
      <AssetRow token={SOL.data} />
      <AssetRow token={USDC.data} />
    </Wrapper>
  );
};
