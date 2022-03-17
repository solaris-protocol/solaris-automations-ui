import React, { FC } from 'react';

import { styled } from '@linaria/react';

import { SideBar } from './SideBar';

export const Wrapper = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: relative;

  flex: 1;
  padding: 20px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    background: url('./lines.svg') no-repeat -200px 0;
    background-size: 2244px 686px;

    content: '';
  }
`;

export const Layout: FC = ({ children }) => {
  return (
    <Wrapper>
      <SideBar />
      <Content>{children}</Content>
    </Wrapper>
  );
};
