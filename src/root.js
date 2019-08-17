import React from 'react';
import { ThemeProvider } from 'styled-components';
// import { Route, Switch } from 'react-router';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import theme from './themes';
import { LoginPage } from './views/login';
import { App } from './views/app';
// import { APP_PATH } from './enums/routes';

export const history = createHistory({});

const Root = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <LoginPage history={history}>
        <Switch>
          <Route exact path="/app" component={() => <App history={history} />} />
        </Switch>
      </LoginPage>
    </Router>
  </ThemeProvider>
);
export default Root;
