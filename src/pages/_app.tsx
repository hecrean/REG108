import { AppProps as NextAppProps } from 'next/app';
import { NextPage } from 'next';
import { createCtx, Update } from '@/utils/context';
import { ReactNode, useState } from 'react';

import '@/styles/global.scss';

type AppState = {
  leftSidebarShowing: boolean;
};

const [useAppState, AppStateProvider] = createCtx<
  AppState & Update<AppState>
>();

type Page<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppProps = NextAppProps & {
  Component: Page;
};

const App = ({ Component, pageProps }: AppProps) => {
  const [leftSidebarShowing, updateLeftSidebarShowing] = useState(false);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppStateProvider value={{ leftSidebarShowing, updateLeftSidebarShowing }}>
      {getLayout(<Component {...pageProps} />)}
    </AppStateProvider>
  );
};

export default App;
