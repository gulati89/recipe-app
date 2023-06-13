import { axiosRequest } from '../config';

export const RecipeService = {
  getRecipeList: () => {
    return axiosRequest('getrecipes', 'GET');
  },

  getRecipeDetails: (id: string | undefined) => {
    return axiosRequest('getrecipedetails', 'GET', {}, id);
  }
};
