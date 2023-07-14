import { create } from 'zustand';
import { RecipeResponse } from '@/lib/types/api';
import { persist } from 'zustand/middleware';

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
