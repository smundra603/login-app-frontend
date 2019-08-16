import React from 'react';
import { ThemeProvider } from 'styled-components';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import theme from './themes';
import { LoginPage } from './views/login';
import App from './views/app';

export const history = createHistory({});

const Root = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <LoginPage history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              // window.location.href = DASHBOARD_PATH; // push state not working properly
              <Redirect to={App} />
            )}
          />
          <Route exact path="/app" component={App} />
        </Switch>
      </LoginPage>
    </Router>
  </ThemeProvider>
);
export default Root;
