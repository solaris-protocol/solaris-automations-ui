import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { WalletKitProvider } from '@gokiprotocol/walletkit';
import { SailProvider } from '@saberhq/sail';
import { SolanaProvider } from '@saberhq/use-solana';

import { ModalsProvider } from 'app/contexts/modals';
import { TokensProvider } from 'app/contexts/tokens';
// import { notify } from 'utils/notifications';

const queryClient = new QueryClient();

export const Providers: FC = ({ children }) => {
  // const onError = useCallback((error: WalletError) => {
  //   notify({
  //     message: error.name,
  //     description: error.message,
  //     type: 'error',
  //   });
  //
  //   console.error(error);
  // }, []);

  return (
    <SolanaProvider>
      <QueryClientProvider client={queryClient}>
        <SailProvider>
          <WalletKitProvider
            defaultNetwork="devnet"
            app={{
              name: 'Solaris Automations UI',
            }}
          >
            <TokensProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </TokensProvider>
          </WalletKitProvider>
        </SailProvider>
      </QueryClientProvider>
    </SolanaProvider>
  );
};
