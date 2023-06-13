import { useEffect, ReactElement } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import SkeletonProductPlaceholder from 'components/cards/skeleton/ProductPlaceholder';
import { dispatch, useSelector } from 'store';
import { getRecipes } from 'store/reducers/recipe';
import { RecipeCardProps } from 'types/recipe';
import RecipeCard from 'components/cards/recipe-card';

const RecipeList = () => {
  const { recipes } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(getRecipes());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let recipeList: ReactElement | ReactElement[] = <></>;
  if (recipes && recipes.length > 0) {
    recipeList = recipes.map((recipe: RecipeCardProps, index: number) => (
      <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
        <RecipeCard
          _id={recipe._id}
          title={recipe.title}
          estimateTime={recipe.estimateTime}
          photo={recipe.photo}
          servings={recipe.servings}
        />
      </Grid>
    ));
  } else {
    recipeList = (
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          There are no recipes
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        {!recipes.length
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Grid key={item} item xs={12} sm={6} md={4} lg={4}>
                <SkeletonProductPlaceholder />
              </Grid>
            ))
          : recipeList}
      </Grid>
    </Grid>
  );
};

export default RecipeList;
