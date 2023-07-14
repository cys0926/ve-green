export type SignupRequest = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type AuthResponseType = {
  msg: 'success';
};
