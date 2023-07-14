interface SignupRequest {
  username: string;
  password: string;
  confirmPassword: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

export { SignupRequest, LoginRequest };
