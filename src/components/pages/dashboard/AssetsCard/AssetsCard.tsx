import type { FC } from 'react';
import React from 'react';

import { styled } from '@linaria/react';

import { DashboardCard } from '../common/DashboardCard/DashboardCard';
import { AssetsList } from './AssetsList';

const DashboardCardStyled = styled(DashboardCard)`
  padding: 20px;
`;

interface Props {}

export const AssetsCard: FC<Props> = (props) => {
  return (
    <DashboardCardStyled title="Assets">
      <AssetsList />
    </DashboardCardStyled>
  );
};
