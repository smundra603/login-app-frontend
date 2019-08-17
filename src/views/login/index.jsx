import * as React from 'react';
import { LOGIN_PATH } from '../../enums/routes';

import { LoginContainer } from './index.style';
import LoginForm from './loginForm';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  state = {
    loggedIn: false
  };

  componentWillMount() {
    if (this.getURLTab() !== LOGIN_PATH && !this.state.loggedIn) {
      this.props.history.push('/login');
    }
  }

  async onLoginSuccess() {
    this.props.history.push('/app');
    console.log(this.props.history.location, this.getURLTab());
    this.setState({
      loggedIn: true
    });
  }
  getURLTab() {
    return this.props.history.location.pathname.split('/')[1];
  }
  render() {
    console.log('props inside is', this.props.history.location.pathname, LOGIN_PATH, this.getURLTab(), this.state.loggedIn, this.props.children);
    return this.getURLTab() === LOGIN_PATH || !this.state.loggedIn ? (
      <LoginContainer>
        <LoginForm onLoginSuccess={this.onLoginSuccess} />
      </LoginContainer>
    ) : (
      <div>{this.props.children}</div>
    );
  }
}
