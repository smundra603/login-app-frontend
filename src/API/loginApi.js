import api from './api';

export async function userLoginAPI(userLoginData) {
  console.log('user login data', userLoginData);
  const response = await api('login', userLoginData);
  return response;
}
