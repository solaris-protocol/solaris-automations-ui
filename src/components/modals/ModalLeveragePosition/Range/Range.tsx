import React, { FC } from 'react';

import { styled } from '@linaria/react';

const Wrapper = styled.div`
  width: 100%;
`;

export const RangeInput = styled.input`
  width: 100%;
  margin-bottom: 17px;

  background-color: transparent;

  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;

    background: rgba(144, 122, 153, 0.2);
    border-radius: 5px;
    cursor: pointer;
  }
  &:focus::-webkit-slider-runnable-track {
    background: rgba(144, 122, 153, 0.2);
  }
  &::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    margin-top: -4px;

    background: linear-gradient(92.18deg, #9c32be -43.31%, #a422a1 102.49%);
    border-radius: 50%;
    cursor: pointer;

    -webkit-appearance: none;
  }

  &::-moz-range-track {
    width: 100%;
    height: 3px;

    background: rgba(144, 122, 153, 0.2);
    border-radius: 5px;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;

    background: linear-gradient(92.18deg, #9c32be -43.31%, #a422a1 102.49%);
    border-radius: 50%;
    cursor: pointer;
  }

  /* TODO: on ms system
  &::-ms-track {
    width: 100%;
    height: 5px;

    color: transparent;

    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    cursor: pointer;
  }
  &::-ms-fill-lower {
    background: linear-gradient(269.99deg, #dc1fff 0%, #00ffa3 99.99%);
    border: 0.2px solid #010101;
    border-radius: 18px;
    box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
  }
  &::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
  }
  &::-ms-thumb {
    width: 16px;
    height: 36px;

    background: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #3071a9;
  }
  &:focus::-ms-fill-upper {
    background: #367ebd;
  }
   */
`;

const Marks = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  color: #fff;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const Text = styled.span``;

const Handle = styled.span`
  /* position: absolute; */

  white-space: nowrap;
`;

interface Props {
  value: number;
  min: number;
  max: number;
  onChange: (val: number) => void;
}

export const Range: FC<Props> = ({ value, min, max, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handle = Math.floor((value * max) / 100);

  return (
    <Wrapper>
      <RangeInput type="range" value={value} onChange={handleChange} />
      <Marks>
        <Text>{min}x</Text>
        <Handle
        // style={{
        //   left: `${value}%`,
        // }}
        >
          {handle}x
        </Handle>
        <Text>{max}x</Text>
      </Marks>
    </Wrapper>
  );
};
