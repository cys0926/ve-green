import { create } from 'zustand';
import { RecipeResponse } from '@/lib/types/api';

export type RecipeState = {
  data: RecipeResponse;
};

type RecipeActions = {
  setRecipe: (recipe: RecipeResponse) => void;
};

const useRecipeStore = create<RecipeState & RecipeActions>()((set) => ({
  data: {} as RecipeResponse,
  setRecipe: (recipe) => set({ recipe: recipe as RecipeResponse }),
}));

export type RecipeStore = RecipeState & RecipeActions;

export default useRecipeStore;
