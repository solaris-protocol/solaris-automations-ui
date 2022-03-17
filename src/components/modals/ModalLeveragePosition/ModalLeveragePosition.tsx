import React, { FC, useCallback, useState } from 'react';

import { styled } from '@linaria/react';
import { useToken } from '@saberhq/sail';

import { StakeTokenForm } from 'components/modals/stakeModals/common/StakeTokenForm';
import { YouReceive } from 'components/modals/stakeModals/ModalStake/YouReceive';
import { CommonModalPropsType } from 'components/modals/types';
import { useSliderInput } from 'hooks';

import { StrategyModal } from '../common/StrategyModal';
import { Button } from '../stakeModals/common/styled';
import { Range } from './Range';
import { YouStake } from './YouStake';

const ButtonStyled = styled(Button)`
  margin-top: 36px;
`;

export const ModalLeveragePosition: FC<CommonModalPropsType> = ({ close, ...props }) => {
  const fromToken = useToken('So11111111111111111111111111111111111111112');
  const toToken = useToken('So11111111111111111111111111111111111111113');
  const [fromAmount, setFromAmount] = useState(1.0);
  const [toAmount, setToAmount] = useState(1.0);

  const maxLeverage = 54;

  const convert = useCallback(
    (val: string | number) => {
      if (typeof val === 'string') {
        return (parseFloat(val) / maxLeverage) * 100;
      } else {
        return Math.floor((val * maxLeverage) / 100);
      }
    },
    [maxLeverage]
  );

  const { value, setValue, pct, setPct } = useSliderInput(convert);

  return (
    <StrategyModal title="Leveraged Position" close={close} {...props}>
      <YouStake token={fromToken.data} />
      <StakeTokenForm token={fromToken.data} amount={fromAmount} setAmount={setFromAmount} />
      <YouReceive />
      {value}
      <StakeTokenForm token={toToken.data} amount={toAmount} setAmount={setToAmount} />
      <Range value={pct} min={1} max={54} onChange={(val) => setPct(val)} />
      <ButtonStyled onClick={() => setFromAmount(0)}>Create order</ButtonStyled>
    </StrategyModal>
  );
};
