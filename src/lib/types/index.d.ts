export interface SignupRequest {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export type User = {
  username: string;
};

export type AuthResponseType = {
  msg: 'success';
};
