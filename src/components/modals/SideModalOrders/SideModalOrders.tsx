import React, { FC, useMemo, useState } from 'react';

import { SideModal } from '../common/SideModal';
import { CommonModalPropsType } from '../types';
import { Header } from './Header';
import { Main } from './Main';
import { Network } from './Network';

export const SideModalOrders: FC<CommonModalPropsType> = ({ close, ...props }) => {
  const [state, setState] = useState('main');

  const { title, back, component } = useMemo(() => {
    switch (state) {
      case 'network':
        return {
          title: 'Network',
          back: () => setState('main'),
          component: <Network setState={setState} />,
        };
      case 'main':
      default:
        return {
          title: 'Network',
          component: <Main setState={setState} />,
        };
    }
  }, [state, setState]);

  return (
    <SideModal back={back} title={title} close={close} {...props}>
      <Header />
      {component}
    </SideModal>
  );
};
