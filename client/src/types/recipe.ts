export interface RecipeProps {
  recipes: RecipeCardProps[];
  recipe: RecipeDetailProps | null;
  error: object | string | null;
}

export interface RecipeCardProps {
  _id?: number | undefined;
  title: string;
  estimateTime: number;
  photo: string;
  servings: number;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface RecipeDetailProps {
  _id: string;
  title: string;
  estimateTime: number;
  servings: number;
  description: string;
  steps: string;
  tips: string;
  ingredients: Ingredient[];
  photo: string;
  creator: string;
}
