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
    },

    // CREATE RECIPE
    createRecipeSuccess(state, action) {
      let newRecipe = action.payload.data;
      newRecipe = {
        ...newRecipe,
        id: state.recipes.length + 1
      };
      state.recipes = [...state.recipes, newRecipe];
    },

    // UPDATE RECIPE
    updateRecipeSuccess(state, action) {
      const recipeDetail = action.payload.data;
      const RecipeUpdate = state.recipes.map((item) => {
        if (item._id === recipeDetail._id) {
          return recipeDetail;
        }
        return item;
      });
      state.recipes = RecipeUpdate;
    },

    // DELETE RECIPE
    deleteRecipeSuccess(state, action) {
      const recipeId = action.payload;
      const deleteRecipe = state.recipes.filter((recipe) => recipe._id !== recipeId);
      state.recipes = deleteRecipe;
    }
  }
});

export default recipeSlice.reducer;

export const { getRecipesSuccess, getRecipeSuccess, createRecipeSuccess, updateRecipeSuccess, deleteRecipeSuccess } = recipeSlice.actions;

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

export function getRecipeInsert(newRecipe: any) {
  return async () => {
    try {
      const response = await RecipeService.createRecipe(newRecipe);
      console.log(response.data);
      dispatch(recipeSlice.actions.createRecipeSuccess(response.data));
    } catch (error) {
      dispatch(recipeSlice.actions.hasError(error));
    }
  };
}

export function getRecipeUpdate(updatedRecipe: any) {
  return async () => {
    try {
      const response = await RecipeService.updateRecipe(updatedRecipe);
      dispatch(recipeSlice.actions.updateRecipeSuccess(response.data));
    } catch (error) {
      dispatch(recipeSlice.actions.hasError(error));
    }
  };
}

export function getRecipeDelete(id: string | undefined) {
  return async () => {
    try {
      await RecipeService.deleteRecipe(id);
      dispatch(recipeSlice.actions.deleteRecipeSuccess(id));
    } catch (error) {
      dispatch(recipeSlice.actions.hasError(error));
    }
  };
}
