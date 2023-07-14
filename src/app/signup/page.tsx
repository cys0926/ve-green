'use client';

/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  userName: string;
  password: string;
  confirmPassword: string;
};

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm<Inputs>();

  return (
    <form>
      <h2 className="py-4 text-4xl font-bold">회원가입</h2>
      <div className="flex w-full flex-col gap-y-1">
        <input
          className="w-full border p-4"
          {...register('userName', {
            required: { value: true, message: '닉네임을 입력해주세요.' },
          })}
        />
        {errors.userName && (
          <span className="px-4 text-warning-500">
            {errors.userName.message}
          </span>
        )}
      </div>
      <div className="w-full">
        <input
          className="w-full border p-4"
          type="password"
          {...register('password', {
            required: { value: true, message: '비밀번호를 입력해주세요.' },
            validate: (value) => {
              if (value.length < 6) {
                return '비밀번호는 6자 이상이어야 합니다.';
              }
              return true;
            },
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
          className="w-full border p-4"
          type="password"
          {...register('confirmPassword', {
            required: { value: true, message: '비밀번호를 입력해주세요.' },
            validate: (value) => {
              if (value.length < 6) {
                return '비밀번호는 6자 이상이어야 합니다.';
              }
              return true;
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="px-4 text-warning-500">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <div className="w-full">
        <input type="submit" />
        {errors.root && (
          <span className="px-4 text-warning-500">{errors.root.message}</span>
        )}
      </div>
    </form>
  );
}

export default SignUp;
