import { styled } from '@linaria/react';

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 20px;

  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;

  background: #211823;
  border: 1px solid rgba(160, 119, 176, 0.2);
  border-radius: 15px;

  &.connect {
    color: #907a99;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
