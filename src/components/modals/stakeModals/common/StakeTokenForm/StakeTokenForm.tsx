import React, { FC } from 'react';

import { styled } from '@linaria/react';
import { Token } from '@saberhq/token-utils';

import { Input } from 'components/common/Input';
import { TokenIcon } from 'components/common/TokenIcon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TokenIconStyled = styled(TokenIcon)`
  margin-right: 15px;
`;

const InputStyled = styled(Input)`
  margin-left: 20px;

  text-align: right;
`;

interface Props {
  token: Token | null | undefined;
  amount: number;
  setAmount: (a: number) => void;
}

export const StakeTokenForm: FC<Props> = ({ token, amount, setAmount }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  return (
    <Wrapper>
      <Row>
        {token ? <TokenIconStyled token={token} size={35} /> : null}
        <InputStyled placeholder="0.00" value={amount} onChange={handleChange} />
      </Row>
    </Wrapper>
  );
};
