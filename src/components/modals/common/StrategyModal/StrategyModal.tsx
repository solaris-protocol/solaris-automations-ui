import React, { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { styled } from '@linaria/react';

import { CommonModalPropsType } from 'components/modals/types';

const TRANSITION_DURATION = 900;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  padding: 1.5px;

  background: rgba(144, 122, 153, 0.3);
  /* background: linear-gradient(139deg, #39d0ff 0, #00a0fa 5%, #7b279a); */
  border-radius: 20px;
`;

const OutsideWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  ${Wrapper} {
    transition: transform ${TRANSITION_DURATION}ms cubic-bezier(0.71, -0.28, 0.25, 1.19);
  }

  /* starting ENTER animation */
  &.transition-enter {
    &::before {
      opacity: 0;
    }

    ${Wrapper} {
      transform: translateY(100vh);
    }
  }

  /* ending ENTER animation */
  &.transition-enter-active {
    &::before {
      opacity: 1;
    }

    ${Wrapper} {
      transform: translateY(0);
    }
  }

  &.transition-enter-done {
    &::before {
      opacity: 1;
    }

    ${Wrapper} {
      transform: translateY(0);
    }
  }

  /* starting EXIT animation */
  &.transition-exit {
    &::before {
      opacity: 1;
    }

    ${Wrapper} {
      transform: translateY(0);
    }
  }

  /* ending EXIT animation */
  &.transition-exit-active {
    &::before {
      opacity: 0;
    }

    ${Wrapper} {
      transform: translateY(100vh);
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background: rgba(21, 16, 22, 0.9);
    opacity: 0;

    transition: opacity ${TRANSITION_DURATION}ms cubic-bezier(0.71, -0.28, 0.25, 1.19);

    content: '';
  }
`;

const Header = styled.h1`
  margin: 0 0 40px;

  color: #fff;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.02em;
  text-align: center;
`;

const Main = styled.div`
  padding: 30px;

  background: rgba(19, 14, 20, 0.99);
  border-radius: 20px;
`;

const Content = styled.div``;

interface Props {
  noAnimation?: boolean;
  back?: () => void;
  title: string | React.ReactNode;
}

export const StrategyModal: FC<Props & CommonModalPropsType> = ({
  noAnimation,
  back,
  title,
  close,
  children,
  ...props
}) => {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleOutsideWrapperClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || !mainRef.current?.contains(e.target as Node)) {
      close();
    }
  };

  return (
    <CSSTransition timeout={noAnimation ? 0 : 600} classNames="transition" {...props}>
      <OutsideWrapper onMouseDown={handleOutsideWrapperClick}>
        <Wrapper ref={mainRef}>
          <Main>
            <Header>{title}</Header>
            <Content>{children}</Content>
          </Main>
        </Wrapper>
      </OutsideWrapper>
    </CSSTransition>
  );
};
