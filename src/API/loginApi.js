import api from './api';

export async function userLoginAPI(userLoginData) {
  const response = await api('login', userLoginData);
  return response;
}

export async function verifyOTP(otpData) {
  const response = await api('verify-otp', otpData);
  return response;
}

export async function resendOTP(resendOtpData) {
  const response = await api('resend-otp', resendOtpData);
  return response;
}
