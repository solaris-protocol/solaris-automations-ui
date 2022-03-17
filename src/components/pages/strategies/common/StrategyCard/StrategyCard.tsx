import type { FC } from 'react';
import React from 'react';

import { styled } from '@linaria/react';

import { Card } from 'components/common/Card';

const CardStyled = styled(Card)`
  padding: 25px 25px 20px;

  cursor: pointer;
`;

const Logo = styled.div`
  height: 44px;

  background-repeat: no-repeat;
  background-position: 0 50%;

  &.leverage {
    background-image: url('./assets/leverage.svg');
  }

  &.sl_tp {
    background-image: url('./assets/sl_tp.svg');
  }

  &.lp {
    background-image: url('./assets/lp.svg');
  }
`;

const Title = styled.div`
  margin-top: 25px;

  color: #fff;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.02em;
`;

const Description = styled.div`
  margin-top: 15px;

  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex: 1;
  grid-gap: 10px;
  align-items: flex-end;
  margin-top: 28px;
`;

const ServiceWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  background: rgba(144, 122, 153, 0.2);
  border-radius: 50%;
`;

const ServiceIcon = styled.div`
  background-repeat: no-repeat;
  background-position: 50%;

  &.orca {
    width: 21px;

    background-image: url('./assets/orca.svg');
  }

  &.solaris {
    width: 17px;

    background-image: url('./assets/solaris.svg');
  }

  &.aave {
    width: 13px;

    background-image: url('./assets/aave.svg');
  }

  &.maker {
    width: 17px;

    background-image: url('./assets/maker.svg');
  }

  &.compound {
    width: 14px;

    background-image: url('./assets/compound.svg');
  }
`;

type Service = 'orca' | 'solaris' | 'aave' | 'maker' | 'compound';

interface Props {
  logo: string;
  title: string;
  description: string;
  services: Service[];
  onCardClick: () => void;
}

export const StrategyCard: FC<Props> = ({ logo, title, description, services, onCardClick }) => {
  return (
    <CardStyled onClick={onCardClick}>
      <Logo className={logo} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ServicesWrapper>
        {services.map((service) => (
          <ServiceWrapper key={service}>
            <ServiceIcon className={service} />
          </ServiceWrapper>
        ))}
      </ServicesWrapper>
    </CardStyled>
  );
};
