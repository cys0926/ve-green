import React from 'react';
import RandomRecipe from '@/app/_component/RandomRecipe';
import YoutubeRecipe from '@/app/_component/YoutubeRecipe';
import RecipeSearch from '@/app/_component/RecipeSearch';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8 py-6">
      <RandomRecipe />
      <YoutubeRecipe />
      <RecipeSearch />
    </div>
  );
}
