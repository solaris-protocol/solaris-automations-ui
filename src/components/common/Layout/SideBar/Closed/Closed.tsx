import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { useWalletKit } from '@gokiprotocol/walletkit';
import { styled } from '@linaria/react';

import { useModals } from 'app/contexts/modals';
import AimIcon from 'assets/icons/aim-icon.svg';
import SettingsIcon from 'assets/icons/settings-icon.svg';
import WalletIcon from 'assets/icons/wallet-icon.svg';
import { SideModalType } from 'components/modals/types';
import { useDev } from 'hooks/system/useDev';

import { ButtonBottom, ButtonTopA, Wrapper } from '../common/styled';

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

const Logo = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 50px;

  background: url('./logo.svg') no-repeat 50% 50%;
  background-size: 50px;
`;

const ButtonTopAStyled = styled(ButtonTopA)`
  position: relative;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  &.active {
    &::before {
      position: absolute;

      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;

      border: 2px solid #712d87;
      border-radius: 50%;

      content: '';
    }
  }
`;

// const ButtonBottomStyled = styled(ButtonBottom)`
//   width: 58px;
//   height: 58px;
//
//   border-radius: 20px;
// `;
//
// const BottomWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   row-gap: 20px;
// `;

export const Closed: FC = () => {
  const isDev = useDev();
  const { openModal } = useModals();

  // const handleOpenSideModalClick = (sideModal: SideModalType) => () => {
  //   openModal(sideModal);
  // };

  return (
    <Wrapper>
      <TopWrapper>
        <NavLink to="/" isActive={(_, location) => ['/'].includes(location.pathname)} component={ButtonTopAStyled}>
          <Logo />
        </NavLink>
        <NavLink
          to="/strategies"
          isActive={(_, location) => ['/strategies'].includes(location.pathname)}
          component={ButtonTopAStyled}
        >
          <AimIcon />
        </NavLink>
      </TopWrapper>
      {/*<BottomWrapper>*/}
      {/*  <ButtonBottomStyled onClick={connect}>*/}
      {/*    <WalletIcon />*/}
      {/*  </ButtonBottomStyled>*/}
      {/*  <ButtonBottomStyled onClick={handleOpenSideModalClick('settings')}>*/}
      {/*    <SettingsIcon />*/}
      {/*  </ButtonBottomStyled>*/}
      {/*</BottomWrapper>*/}
    </Wrapper>
  );
};
