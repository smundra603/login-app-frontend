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
class DebugRouter extends Router {
  constructor(props) {
    super(props);
    console.log('initial history is: ', JSON.stringify(this.props.history, null, 2));
    this.props.history.listen((location, action) => {
      console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.props.history, null, 2));
    });
  }
}
const Root = () => (
  <ThemeProvider theme={theme}>
    <DebugRouter history={history}>
      <LoginPage history={history}>
        <Switch>
          <Route exact path="/app" component={() => <App history={history} />} />
        </Switch>
      </LoginPage>
    </DebugRouter>
  </ThemeProvider>
);
export default Root;
