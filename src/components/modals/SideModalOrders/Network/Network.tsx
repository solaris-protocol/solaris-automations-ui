import React, { FC } from 'react';

import { styled } from '@linaria/react';
import { DEFAULT_NETWORK_CONFIG_MAP } from '@saberhq/solana-contrib/src/constants';
import { useConnectionContext } from '@saberhq/use-solana';
import { rgba } from 'polished';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemLabelWrapper = styled.label`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 45px;

  border-top: 1px solid ${rgba('#907A99', 0.1)};
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid ${rgba('#907A99', 0.1)};
  }
`;

const RadioHidden = styled.input`
  position: absolute;
  z-index: -1;

  width: 20px;
  height: 20px;

  opacity: 0;

  &:checked + span::before,
  &:focus + span::before {
    background: #78468c;
    border: none;
  }

  &:checked + span::after {
    opacity: 1;
  }
`;

const RadioVisible = styled.span`
  position: relative;

  padding-left: 40px;

  color: #fff;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;

  &::before {
    position: absolute;

    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    background-color: rgba(144, 122, 153, 0.2);
    border: 2px solid #907a99;
    border-radius: 20px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    content: '';
  }

  &::after {
    position: absolute;

    top: 5px;
    left: 5px;

    width: 10px;
    height: 10px;

    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    opacity: 0;

    transition: opacity 0.2s;

    content: '';
  }
`;

interface Props {
  setState: (state: string) => void;
}

export const Network: FC<Props> = (props) => {
  const handleEndpointChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Wrapper onChange={handleEndpointChange}>
      {Object.keys(DEFAULT_NETWORK_CONFIG_MAP).map((networkItem) => (
        <ItemLabelWrapper key={networkItem}>1</ItemLabelWrapper>
      ))}
    </Wrapper>
  );
};
