import type { FC } from 'react';
import React from 'react';

import { styled } from '@linaria/react';

import { useModals } from 'app/contexts/modals';

import { Button } from './common/styled';
import { ConnectBalanceButton } from './ConnectBalanceButton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.div`
  position: absolute;
  right: 0;
  left: 0;

  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;

  opacity: 0.97;

  pointer-events: none;
`;

const Right = styled.div`
  display: flex;
  grid-gap: 14px;
`;

interface Props {
  title: string;
}

export const Header: FC<Props> = ({ title }) => {
  const { openModal } = useModals();

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Right>
        <Button onClick={() => openModal('orders')}>My orders</Button>
        <ConnectBalanceButton />
      </Right>
    </Wrapper>
  );
};
