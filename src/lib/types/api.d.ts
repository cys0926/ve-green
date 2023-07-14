export type SignupRequest = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type AuthResponseType = {
  msg: 'success';
};

export type PlantRequest = {
  plantId: number;
};

export type PlantResponse = {
  plantId: number;
  name: string;
  type: string;
  status: string;
};

export type RecipeResponse = {
  RCP_NM: string;
  ATT_FILE_NO_MAIN: string;
  RCP_PARTS_DTLS: string;
  MANUAL: { description: string; image: string }[];
};

export type RecipeIngredientResponse = {
  openAi: AIRecipe;
  savedData: RecipeResponse[];
};

export type AIRecipe = {
  RCP_NM: string;
  RCP_PARTS_DTLS: string;
  MANUAL: { description: string }[];
};

export type YoutubeResponse = {
  name: string;
  link: string;
  thumbnailUrl: string;
  userName: string;
};

export type PlantsListResponse = {
  plantId: number;
  name: string;
  type: string;
  status: string;
};

export type PlantsPostRequest = {
  name: string;
  type: string;
  status: string;
};

export type PlantsPatchRequest = {
  plantId: number;
  newName: string;
};
