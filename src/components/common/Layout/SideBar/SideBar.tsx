import React, { FC } from 'react';

import { styled } from '@linaria/react';

import { Closed } from './Closed';

const WIDTH_CLOSED = 110;

const PlaceHandler = styled.div`
  position: relative;

  flex-shrink: 0;
  width: ${WIDTH_CLOSED}px;
`;

const Main = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  row-gap: 25px;
  align-items: center;

  width: ${WIDTH_CLOSED}px;
  height: 100%;
  padding: 30px 26px;

  background: #130e14;
  border-right: 1px solid #201a22;
`;

export const SideBar: FC = () => {
  return (
    <PlaceHandler>
      <Main>
        <Closed />
      </Main>
    </PlaceHandler>
  );
};
