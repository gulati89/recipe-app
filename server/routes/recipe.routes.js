import express from "express";

import {
    createRecipe,
    deleteRecipe,
    getAllRecipes,
    getRecipeDetail,
    updateRecipe,
} from "../controllers/recipe.controller.js";

const router = express.Router();

router.route('/recipes').get(getAllRecipes);
router.route('/recipe_details/:id').get(getRecipeDetail);
router.route('/create_recipe').post(createRecipe);
router.route('/update_recipe/:id').patch(updateRecipe);
router.route('/delete_recipe/:id').delete(deleteRecipe);

export default router;