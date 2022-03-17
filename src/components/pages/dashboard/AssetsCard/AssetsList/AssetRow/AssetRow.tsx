import type { FC } from 'react';
import React from 'react';

import { styled } from '@linaria/react';
import { Token } from '@saberhq/token-utils';

import { TokenIcon } from 'components/common/TokenIcon';

const Wrapper = styled.div`
  display: flex;
  grid-gap: 15px;
`;

const InfoWrapper = styled.div`
  flex: 1;
  grid-gap: 2px;

  font-weight: 500;
  letter-spacing: 0.02em;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  color: #fff;
  font-size: 14px;
  line-height: 17px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

interface Props {
  token: Token | null | undefined;
}

export const AssetRow: FC<Props> = ({ token }) => {
  return (
    <Wrapper>
      {token ? <TokenIcon token={token} size={35} /> : null}
      <InfoWrapper>
        <Top>
          <div>{token?.symbol}</div>
          <div>750.589</div>
        </Top>
        <Bottom>
          <div>{token?.name}</div>
          <div>$69,804.77</div>
        </Bottom>
      </InfoWrapper>
    </Wrapper>
  );
};
