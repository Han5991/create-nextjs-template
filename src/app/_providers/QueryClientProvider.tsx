'use client';

import {QueryClientProvider as TanStackQueryClientProvider} from '@tanstack/react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ReactNode} from 'react';

import {queryClient} from '@shared/lib/react-query';

type QueryClientProviderProps = {
  children: ReactNode;
};

const QueryClientProvider = (props: QueryClientProviderProps) => {
  const {children} = props;
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </TanStackQueryClientProvider>
  );
};

export default QueryClientProvider;
