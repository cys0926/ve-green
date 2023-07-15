'use client';

/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useForm } from 'react-hook-form';
import postPlants from '@/lib/utils/api/plants/postPlants';
import useAuthStore from '@/store/authStore';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import { useForm } from 'react-hook-form';
// import postPlants from '@/lib/utils/api/plants/postPlants';

type Inputs = {
  name: string;
  type: string;
};

function Page() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onCreatePlant = handleSubmit(async (data) => {
    const { name, type } = data;

    try {
      await postPlants({ name, type, username: user!.username });
      router.push('/diary');
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  });

  if (!user) {
    router.push('/diary');
  }

  return (
    <div className="h-full px-12 py-12">
      <form onSubmit={onCreatePlant} className="flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-1">
          <span className="text-xl font-black">이름</span>
          <input
            className="w-full border p-4"
            {...register('name', {
              required: {
                value: true,
                message: '반려 식물의 이름을 입력해주세요',
              },
            })}
          />
          {errors.name && (
            <span className="px-4 text-warning-500">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-xl font-black">종류</span>
          <input
            className="w-full border p-4"
            {...register('type', {
              required: {
                value: true,
                message: '반려 식물의 종류를 입력해주세요.',
              },
            })}
          />
          {errors.type && (
            <span className="px-4 text-warning-500">{errors.type.message}</span>
          )}
        </div>
      </form>
    </div>
  );
}

export default Page;
