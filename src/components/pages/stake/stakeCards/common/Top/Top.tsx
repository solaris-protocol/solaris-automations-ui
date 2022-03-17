import React, { FC } from 'react';

import { styled } from '@linaria/react';
import { Token } from '@saberhq/token-utils';

import { TokenIcon } from 'components/common/TokenIcon';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const TokenIconStyled = styled(TokenIcon)`
  margin-right: 15px;
`;

const Symbol = styled.span`
  color: #fff;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.02em;
`;

interface Props {
  token: Token | null | undefined;
}

export const Top: FC<Props> = ({ token }) => {
  return (
    <Wrapper>
      <Left>
        {token ? <TokenIconStyled token={token} size={40} /> : null}
        {token ? <Symbol title={token.address}>{token.symbol}</Symbol> : null}
      </Left>
    </Wrapper>
  );
};
