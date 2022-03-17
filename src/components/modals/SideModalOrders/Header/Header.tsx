import type { FC } from 'react';
import React from 'react';

import { styled } from '@linaria/react';
import classNames from 'classnames';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  padding: 0 20px;

  border-bottom: 1px solid rgba(144, 122, 153, 0.2); ;
`;

const Menu = styled.div`
  display: flex;
  grid-gap: 20px;
  height: 100%;
`;

const Button = styled.button`
  position: relative;

  color: #907a99;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;

  &.active {
    color: #fff;

    &::before {
      position: absolute;
      bottom: 0;

      width: 100%;
      height: 2px;

      background: #fff;

      content: '';
    }
  }
`;

const CancelButton = styled.button`
  color: #907a99;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
`;

interface Props {}

export const Header: FC<Props> = (props) => {
  return (
    <Wrapper>
      <Menu>
        <Button className={classNames({ active: true })}>Open</Button>
        <Button>History</Button>
      </Menu>
      <CancelButton>Cancel All</CancelButton>
    </Wrapper>
  );
};
