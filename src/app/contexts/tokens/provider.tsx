import { useMemo } from 'react';

import { networkToChainId, Token } from '@saberhq/token-utils';
import { useConnectionContext } from '@saberhq/use-solana';
import { createContainer } from 'unstated-next';

import { makeTokenMap } from './utils/makeTokenMap';

export type TokenMap = Record<string, Token>;

export interface UseTokens {
  tokens: readonly Token[];
  tokenMap: TokenMap;
}

const useTokensInternal = (): UseTokens => {
  const { network } = useConnectionContext();
  const chainId = networkToChainId(network);

  const standardTokenMap = useMemo(() => makeTokenMap(chainId), [chainId]);

  const tokenMap = useMemo(() => {
    if (!chainId) {
      return {};
    }

    return standardTokenMap;
  }, [chainId, standardTokenMap]);

  const tokens = useMemo(() => {
    return Object.values(tokenMap);
  }, [tokenMap]);

  return {
    tokens,
    tokenMap,
  };
};

export const { Provider: TokensProvider, useContainer: useTokensContext } = createContainer(useTokensInternal);
