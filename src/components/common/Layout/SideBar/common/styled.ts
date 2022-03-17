import { styled } from '@linaria/react';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 20px;
`;

export const ButtonTopA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff !important;

  background: rgba(144, 122, 153, 0.2);
  border-radius: 20px;

  &.active {
    background: #712d87;
  }

  &:hover {
    background: #712d87;
  }
`;

export const ButtonBottom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #907a99;

  background: rgba(255, 255, 255, 0.05);
`;
