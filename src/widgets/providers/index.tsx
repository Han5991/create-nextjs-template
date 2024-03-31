import {ReactNode} from 'react';

import QueryClientProvider from './QueryClientProvider';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = (props: ProvidersProps) => {
  const {children} = props;
  return <QueryClientProvider>{children}</QueryClientProvider>;
};

export default Providers;
