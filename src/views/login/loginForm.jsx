import * as React from 'react';
import {
  LoginFormContainer,
  FormContainer,
  FormLabel,
  EmailInput,
  PasswordInput,
  LoginRegisterContainer,
  LoginButton,
  MobileInput,
  LoginOptionsContainer,
  LoginOption,
  LoginOptionButton,
  MarginBetween,
  MobileLoginContainer,
  OTPInput,
  OTPButton
} from './index.style';
import { userLoginAPI, verifyOTP, resendOTP } from '../../API/loginApi';

const allLoginOptions = ['email_password', 'phoneNumber'];
const loginOptionsLabel = {
  email_password: 'EMAIL',
  phoneNumber: 'MOBILE'
};

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEmailLogin = this.handleEmailLogin.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleSendOTP = this.handleSendOTP.bind(this);
    this.handleVerifyOTP = this.handleVerifyOTP.bind(this);
    this.handleResendOTP = this.handleResendOTP.bind(this);
  }
  state = {
    loginVia: 'email_password',
    password: '',
    email: '',
    phoneNumber: '',
    otpSent: false,
    resendOTPLoading: false
  };

  handleLoginChange(e) {
    e.stopPropagation();
    this.setState({
      loginVia: e.target.value,
      password: '',
      email: '',
      phoneNumber: '',
      otpSent: false,
      otp: '',
      resendOTPLoading: false
    });
  }
  handleChange(e) {
    e.stopPropagation();
    if (e.target.name === 'phoneNumber' && e.target.value.length > 10) {
      return;
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleEmailLogin(e) {
    e.stopPropagation();
    const loginResponse = await userLoginAPI({ email: this.state.email, password: this.state.password, mode: 'email_password' });
    if (loginResponse.success) {
      this.props.onLoginSuccess();
    }
  }
  async handleVerifyOTP(e) {
    e.stopPropagation();
    const { phoneNumber, otp } = this.state;
    const otpVerificationResponse = await verifyOTP({ phoneNumber, otp });
    if (otpVerificationResponse.success) {
      this.props.onLoginSuccess();
    }
  }
  async handleResendOTP(e) {
    e.stopPropagation();
    const { phoneNumber } = this.state;
    this.setState({
      resendOTPLoading: true,
      otp: ''
    });
    const otpVerificationResponse = await resendOTP({ phoneNumber });
    if (otpVerificationResponse.success) {
      this.setState({
        resendOTPLoading: false
      });
    }
  }

  async handleSendOTP(e) {
    e.stopPropagation();
    const loginResponse = await userLoginAPI({ mode: 'phoneNumber', phoneNumber: this.state.phoneNumber });
    if (loginResponse.success) {
      this.setState({
        otpSent: true
      });
    }
  }

  renderLoginViaEmailForm() {
    return (
      <div>
        <FormContainer>
          <FormLabel>Email</FormLabel>
          <EmailInput placeholder="Enter email" value={this.state.email} name="email" onChange={this.handleChange} />
          <FormLabel>Password</FormLabel>
          <PasswordInput placeholder="Enter password" value={this.state.password} name="password" onChange={this.handleChange} />
        </FormContainer>
        <LoginRegisterContainer>
          <LoginButton onClick={this.handleEmailLogin}> Login </LoginButton>
        </LoginRegisterContainer>
      </div>
    );
  }
  renderVerifyOTP() {
    return (
      <div style={{ marginTop: '10px' }}>
        <FormContainer>
          <FormLabel style={{ margin: '0px auto' }}>{this.state.resendOTPLoading ? 'SENDING OTP' : 'OTP SENT'}</FormLabel>
          <MobileLoginContainer>
            <OTPInput value={this.state.otp} name="otp" placeholder="Enter 4 digit OTP" onChange={this.handleChange} />
            <OTPButton onClick={this.handleVerifyOTP} disbale={this.state.resendOTPLoading}>
              Verify
            </OTPButton>
            <OTPButton style={{ marginLeft: '10px' }} onClick={this.handleResendOTP}>
              Resend
            </OTPButton>
          </MobileLoginContainer>
        </FormContainer>
      </div>
    );
  }
  renderLoginViaMobile() {
    return (
      <div>
        <FormContainer>
          <FormLabel>Mobile Number</FormLabel>
          <MobileLoginContainer>
            <MobileInput placeholder="Enter phone number" value={this.state.phoneNumber} name="phoneNumber" onChange={this.handleChange} />
            <OTPButton onClick={this.handleSendOTP}> SEND OTP </OTPButton>
          </MobileLoginContainer>
        </FormContainer>
      </div>
    );
  }

  renderLoginFormsBasedOnType() {
    switch (this.state.loginVia) {
      case 'phoneNumber': {
        if (this.state.otpSent) {
          return this.renderVerifyOTP();
        }
        return this.renderLoginViaMobile();
      }
      default:
        return this.renderLoginViaEmailForm();
    }
  }

  renderLoginOptions() {
    const toRenderLoginOptions = allLoginOptions.filter((item) => item !== this.state.loginVia);
    return (
      <LoginOptionsContainer>
        {toRenderLoginOptions.map((option) => (
          <LoginOption>
            <LoginOptionButton value={option} onClick={this.handleLoginChange}>
              {`${loginOptionsLabel[option]} LOGIN`}
            </LoginOptionButton>
          </LoginOption>
        ))}
        <MarginBetween> OR </MarginBetween>
      </LoginOptionsContainer>
    );
  }
  render() {
    return (
      <LoginFormContainer>
        {this.renderLoginOptions()}
        {this.renderLoginFormsBasedOnType()}
      </LoginFormContainer>
    );
  }
}
