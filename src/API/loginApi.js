import api from './api';

export async function userLoginAPI(userLoginData) {
  console.log('user login data', userLoginData);
  const response = await api('login', userLoginData);
  return response;
}

export async function verifyOTP(otpData) {
  console.log('verify otp data', otpData);
  const response = await api('verify-otp', otpData);
  return response;
}

export async function resendOTP(resendOtpData) {
  console.log('resend otp data', resendOtpData);
  const response = await api('resend-otp', resendOtpData);
  return response;
}
