import { create } from 'zustand';
import { RecipeResponse } from '@/lib/types/api';

export type RecipeState = {
  recipe: RecipeResponse;
};

type RecipeActions = {
  setRecipe: (recipe: RecipeResponse) => void;
};

const useRecipeStore = create<RecipeState & RecipeActions>()((set) => ({
  recipe: {} as RecipeResponse,
  setRecipe: (recipe) => set({ recipe }),
}));

export type RecipeStore = RecipeState & RecipeActions;

export default useRecipeStore;
