import { create } from 'zustand';
import {
  AuthResponseType,
  LoginRequest,
  RequestType,
  SignupRequest,
  User,
} from '@/lib/types';
import postSignUp from '@/lib/utils/api/auth/postSignUp';
import postLogOut from '@/lib/utils/api/auth/postLogOut';
import postLogIn from '@/lib/utils/api/auth/postLogIn';

export type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
};

type AuthActions = {
  setUser: (user: User | null) => void;
  login: ({ username, password }: LoginRequest) => Promise<User>;
  logout: () => void;
  signup: ({
    username,
    password,
    confirmPassword,
  }: SignupRequest) => Promise<AuthResponseType>;
};

const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  login: postLogIn,
  logout: postLogOut,
  signup: postSignUp,
}));

export type AuthStore = AuthState & AuthActions;

export default useAuthStore;
