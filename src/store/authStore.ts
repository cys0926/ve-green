import { create } from 'zustand';
import { AuthResponseType, User } from '@/lib/types';
import postSignUp from '@/lib/utils/api/auth/postSignUp';
import postLogOut from '@/lib/utils/api/auth/postLogOut';
import postLogIn from '@/lib/utils/api/auth/postLogIn';
import { LoginRequest, SignupRequest } from '@/lib/types/api';

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
  }: SignupRequest) => Promise<User>;
};

const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user }),
  login: postLogIn,
  logout: postLogOut,
  signup: postSignUp,
}));

export type AuthStore = AuthState & AuthActions;

export default useAuthStore;
