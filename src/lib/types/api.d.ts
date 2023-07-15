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
  username: string;
};

export type PlantResponse = {
  plantId: number;
  name: string;
  type: string;
};

export type RecipeResponse = {
  RCP_NM: string;
  ATT_FILE_NO_MAIN: string;
  RCP_PARTS_DTLS: string;
  MANUAL: { description: string; image: string }[];
};

export type RecipeIngredientResponse = {
  openAi: AIRecipeType;
  savedData: RecipeResponse[];
};

export type AIRecipeType = {
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

export type PlantsPostRequest = {
  name: string;
  type: string;
  username: string;
};

export type PlantsPatchRequest = {
  plantId: number;
  newName: string;
};

export type DiaryResponse = {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  plant: PlantResponse;
  createdAt: string;
  updatedAt: string;
};

export type DiaryListResponse = {
  diaryId: number;
  createdAt: string;
  title: string;
};

export type DiaryPostRequest = {
  title: string;
  content: string;
  plantId: number;
};

export type DiaryPostResponse = {
  diaryId: number;
};

export type DiaryPatchRequest = {
  diaryId: number;
  content: string;
};

export type DiaryDeleteRequest = {
  plantId: number;
  diaryId: number;
};

export type SellingResponse = {
  name: String;
  price: String;
  mall: String;
  productLink: String;
  imgUrl: String;
};
