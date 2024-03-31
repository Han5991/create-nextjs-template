'use client';

import {QueryClientProvider as TanStackQueryClientProvider} from '@tanstack/react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ReactQueryStreamedHydration} from '@tanstack/react-query-next-experimental';
import {ReactNode} from 'react';

import {getQueryClient} from '@shared/lib/react-query';

type QueryClientProviderProps = {
  children: ReactNode;
};

const QueryClientProvider = (props: QueryClientProviderProps) => {
  const {children} = props;
  const queryClient = getQueryClient();
  return (
    <TanStackQueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration
        queryClient={queryClient}
        options={{
          hydrate: {
            defaultOptions: {
              queries: {
                retry: false,
              },
            },
          },
        }}>
        {children}
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </TanStackQueryClientProvider>
  );
};

export default QueryClientProvider;
