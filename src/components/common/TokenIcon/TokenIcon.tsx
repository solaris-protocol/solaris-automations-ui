import React, { FC } from 'react';

import { Token } from '@saberhq/token-utils';

import { Identicon } from '../Identicon';

interface Props {
  token: Token;
  style?: React.CSSProperties;
  size?: number;
  className?: string;
}

export const TokenIcon: FC<Props> = ({ token, size, style, className }) => {
  const customSize = size || 20;

  if (token?.icon) {
    return (
      <img
        key={token.icon}
        alt="Token icon"
        src={token.icon}
        width={style?.width || customSize.toString()}
        height={style?.height || customSize.toString()}
        style={{
          borderRadius: '50%',
          backgroundColor: '#2E1C34',
          ...style,
        }}
        className={className}
      />
    );
  }

  return (
    <Identicon
      address={token.address}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        ...style,
      }}
      className={className}
    />
  );
};
