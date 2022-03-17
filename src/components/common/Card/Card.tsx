import React, { FC, HTMLAttributes } from 'react';

import { styled } from '@linaria/react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: rgba(19, 14, 20, 0.99);
  border: 1.5px solid rgba(144, 122, 153, 0.2);
  border-radius: 20px;
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: FC<Props> = ({ children, className, ...props }) => {
  return (
    <Wrapper {...props} className={className}>
      {children}
    </Wrapper>
  );
};
