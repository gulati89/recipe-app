import { axiosRequest } from '../config';

export const AuthService = {
  loginAuth: (emailInput: string, passwordInput: string) => {
    const inputDTO = {
      email: emailInput,
      password: passwordInput
    };
    return axiosRequest('signin', 'POST', inputDTO);
  },

  registerAuth: (inputDTO: any) => {
    return axiosRequest('signup', 'POST', inputDTO);
  }
};
