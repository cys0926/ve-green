'use client';

/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginRequest } from '@/lib/types/api';
import useAuthStore from '@/store/authStore';
import { useRouter } from 'next/navigation';

function Page() {
  const login = useAuthStore((state) => state.login);
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginRequest>();

  const onSignIn = handleSubmit(async (data) => {
    const { username, password } = data;

    try {
      const user = await login({
        username,
        password,
      });
      setUser({ username: user.username });
      router.push('/');
    } catch (err) {
      if (err instanceof Error) {
        setError('root', { message: err.message });
      }
    }
  });

  return (
    <form
      onSubmit={onSignIn}
      className="flex flex-col items-center gap-y-6 px-6 py-12"
    >
      <h2 className="py-4 text-4xl font-bold">로그인</h2>
      <div className="flex w-full flex-col gap-y-1">
        <input
          placeholder="아이디"
          className="w-full border p-4"
          {...register('username', {
            required: { value: true, message: '아이디를 입력해주세요.' },
          })}
        />
        {errors.username && (
          <span className="px-4 text-warning-500">
            {errors.username.message}
          </span>
        )}
      </div>
      <div className="w-full">
        <input
          placeholder="비밀번호"
          className="w-full border p-4"
          type="password"
          {...register('password', {
            required: { value: true, message: '비밀번호를 입력해주세요.' },
          })}
        />
        {errors.password && (
          <span className="px-4 text-warning-500">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="w-full">
        <input
          type="submit"
          className="w-full border bg-primary-500 p-4 text-white shadow"
        />
        {errors.root && (
          <span className="px-4 text-warning-500">{errors.root.message}</span>
        )}
      </div>
    </form>
  );
}

export default Page;
