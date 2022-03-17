import React, { FC } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Layout } from 'components/common/Layout';
import { Dashboard } from 'pages/dashboard';
import { Strategies } from 'pages/strategies';

import { Providers } from './Providers';

export const Routes: FC = () => {
  return (
    <>
      <HashRouter>
        <Providers>
          <Layout>
            <Switch>
              <Route exact path={['/', '/dashboard']}>
                <Dashboard />
              </Route>
              <Route exact path="/strategies">
                <Strategies />
              </Route>
            </Switch>
          </Layout>
        </Providers>
      </HashRouter>
    </>
  );
};
