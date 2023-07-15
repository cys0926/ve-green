import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { RecipeResponse } from '@/lib/types/api';

export type RecipeState = {
  recipe: RecipeResponse;
};

type RecipeActions = {
  setRecipe: (recipe: RecipeResponse) => void;
};

const useRecipeStore = create<RecipeState & RecipeActions>()(
  persist(
    (set) => ({
      recipe: {} as RecipeResponse,
      setRecipe: (recipe) => set({ recipe }),
    }),
    {
      name: 'recipe-storage',
    },
  ),
);

export type RecipeStore = RecipeState & RecipeActions;

export default useRecipeStore;
