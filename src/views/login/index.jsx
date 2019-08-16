import * as React from 'react';
import { userLoginAPI } from '../../API/loginApi';
import { LOGIN_PATH } from '../../enums/routes';

import { LoginContainer } from './index.style';
import LoginForm from './loginForm';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  state = {
    loggedIn: false
  };
  getURLTab() {
    return this.props.history.location.hash.split('#')[1];
  }
  async handleLogin(values) {
    const loginResponse = await userLoginAPI(values);
    if (loginResponse.success) {
      this.setState({
        loggedIn: true
      });
      this.props.history.push('/#/app');
    }
  }
  render() {
    console.log('props inside is', this.props.history.location.hash, LOGIN_PATH, this.getURLTab(), this.state.loggedIn);
    return this.getURLTab() === LOGIN_PATH || !this.state.loggedIn ? (
      <LoginContainer>
        <LoginForm onLoginClick={this.handleLogin} />
        {/* <LoginButton onClick={this.handleLogin()}>Login</LoginButton> */}
      </LoginContainer>
    ) : (
      <div>{this.props.children}</div>
    );
  }
}
