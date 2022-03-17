import type { FC } from 'react';
import React, { HTMLAttributes } from 'react';

import { styled } from '@linaria/react';

import { Card } from 'components/common/Card';

const CardStyled = styled(Card)`
  flex: 1;
  min-width: 300px;
`;

const Title = styled.div`
  margin-bottom: 20px;

  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export const DashboardCard: FC<Props> = ({ title, children, className }) => {
  return (
    <CardStyled className={className}>
      {title ? <Title>{title}</Title> : null}
      {children}
    </CardStyled>
  );
};
