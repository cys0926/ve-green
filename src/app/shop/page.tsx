import React from 'react';
import Info from '@/app/shop/_components/Info';
import ShopList from '@/app/shop/_components/ShopList';

function Page() {
  return (
    <div className="flex flex-col gap-y-12">
      <Info />
      <ShopList />
    </div>
  );
}

export default Page;
