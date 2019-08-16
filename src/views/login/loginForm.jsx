import * as React from 'react';
import { LoginFormContainer, FormContainer, FormLabel, EmailInput, PasswordInput, LoginRegisterContainer, LoginButton } from './index.style';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  state = {
    password: '',
    email: ''
  };

  handleChange(e) {
    e.stopPropagation();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleLogin(e) {
    e.stopPropagation();
    console.log('login', this.state.email, this.state.password);
    this.props.onLoginClick({ email: this.state.email, password: this.state.password });
  }

  render() {
    return (
      <LoginFormContainer>
        <FormContainer>
          <FormLabel>Email</FormLabel>
          <EmailInput placeholder="Enter email" value={this.state.email} name="email" onChange={this.handleChange} />
          <FormLabel>Password</FormLabel>
          <PasswordInput placeholder="Enter password" value={this.state.password} name="password" onChange={this.handleChange} />
        </FormContainer>
        <LoginRegisterContainer>
          <LoginButton onClick={this.handleLogin}> Login </LoginButton>
        </LoginRegisterContainer>
      </LoginFormContainer>
    );
  }
}
