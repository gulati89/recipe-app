import { axiosRequest } from '../config';

export const RecipeService = {
  getRecipeList: () => {
    return axiosRequest('getrecipes', 'GET');
  },

  getRecipeDetails: (id: string | undefined) => {
    return axiosRequest('getrecipedetails', 'GET', {}, id);
  },

  createRecipe: (inputDTO: any) => {
    return axiosRequest('createrecipe', 'POST', inputDTO);
  },

  updateRecipe: (inputDTO: any) => {
    return axiosRequest('updaterecipe', 'PATCH', inputDTO);
  },

  deleteRecipe: (id: string | undefined) => {
    return axiosRequest('deleterecipe', 'DELETE', {}, id);
  }
};
