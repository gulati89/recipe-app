// project import
import { dispatch } from 'store';

// third-party
import { createSlice } from '@reduxjs/toolkit';

// types
import { RecipeProps } from 'types/recipe';
import { RecipeService } from '_api/services/recipe.service';

const initialState: RecipeProps = {
  recipes: [],
  recipe: null,
  error: null
};

// ==============================|| RECIPE-LIST - SLICE ||============================== //

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload.error;
    },

    // GET RECIPES
    getRecipesSuccess(state, action) {
      state.recipes = action.payload;
    },

    // GET RECIPE
    getRecipeSuccess(state, action) {
      state.recipe = action.payload;
    }
  }
});

export default recipeSlice.reducer;

export const { getRecipesSuccess } = recipeSlice.actions;

export function getRecipes() {
  return async () => {
    try {
      const response = await RecipeService.getRecipeList();
      dispatch(recipeSlice.actions.getRecipesSuccess(response.data));
    } catch (error) {
      dispatch(recipeSlice.actions.hasError(error));
    }
  };
}

export function getRecipe(id: string | undefined) {
  return async () => {
    try {
      const response = await RecipeService.getRecipeDetails(id);
      dispatch(recipeSlice.actions.getRecipeSuccess(response.data));
    } catch (error) {
      dispatch(recipeSlice.actions.hasError(error));
    }
  };
}
