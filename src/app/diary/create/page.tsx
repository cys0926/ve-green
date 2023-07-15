'use client';

/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import postPlants from '@/lib/utils/api/plants/postPlants';

type Inputs = {
  name: string;
  type: string;
};

function Page() {
  const router = useRouter();

  const { register, handleSubmit, setError } = useForm<Inputs>();

  const onCreatePlant = handleSubmit(async (data) => {
    const { name, type } = data;

    try {
      const user = await postPlants({ name, type });
      router.push('/');
    } catch (err) {
      if (err instanceof Error) {
        setError('root', { message: err.message });
      }
    }
  });

  return (
    <div>
      <form onSubmit={onCreatePlant}>
        <input
          className="w-full border p-4"
          {...register('name', {
            required: {
              value: true,
              message: '반려 식물의 이름을 입력해주세요',
            },
          })}
        />
        <input
          className="w-full border p-4"
          {...register('type', {
            required: {
              value: true,
              message: '반려 식물의 종류를 입력해주세요.',
            },
          })}
        />
      </form>
    </div>
  );
}

export default Page;
