'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  title: string;
  content: string;
};

function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>();

  const onCreatePost = handleSubmit(async (data) => {
    const { title, content } = data;

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
    <div className="flex h-full flex-col">
      <form
        onSubmit={onCreatePost}
        className="flex h-full w-5/6 flex-col gap-y-6 self-center py-8"
      >
        <article>
          <span>제목</span>
          <input
            className="w-full border-b p-4"
            {...register('title', {
              required: { value: true, message: '제목을 입력해주세요.' },
            })}
          />
          {errors.title && (
            <span className="px-4 text-warning-500">
              {errors.title.message}
            </span>
          )}
        </article>
        <article className="flex flex-1 flex-col">
          <span>내용</span>
          <textarea
            className="h-full w-full border p-4"
            {...register('content', {
              required: { value: true, message: '제목을 입력해주세요.' },
            })}
          />
          {errors.content && (
            <span className="px-4 text-warning-500">
              {errors.content.message}
            </span>
          )}
        </article>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Page;
