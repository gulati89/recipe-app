import { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

// material-ui
import { Typography, Box, Stack, IconButton, Grid, Button } from '@mui/material';
import { AccessTimeOutlined, RestaurantOutlined, StarBorderOutlined, Edit, Delete } from '@mui/icons-material';

// project imports
import { dispatch, useSelector } from 'store';
import { getRecipe } from 'store/reducers/recipe';
import { Ingredient } from 'types/recipe';
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import Loader from 'components/Loader';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipe } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecipe(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainCard sx={{ borderRadius: '15px', p: '20px', bgColor: '#fcfcfc', width: '100%' }}>
      {(!recipe || (recipe && recipe._id !== id)) && <Loader />}
      {recipe && recipe._id === id && (
        <Fragment>
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            {recipe.title}
          </Typography>
          <Grid container>
            <Grid item sm={9} mt="15px;">
              <img
                src={recipe.photo}
                alt={recipe.title}
                height={400}
                style={{ width: '100%', objectFit: 'cover', borderRadius: '10px' }}
                className="recipe_details-img"
              />
            </Grid>
            <Grid item sm={2} p="15px" display="flex" flexDirection="column" gap={2}>
              <AnimateButton>
                <Button title="Edit" fullWidth variant="contained">
                  <Edit />
                </Button>
              </AnimateButton>
              <AnimateButton>
                <Button title="Delete" fullWidth variant="contained">
                  <Delete />
                </Button>
              </AnimateButton>
            </Grid>
            <Grid item sm={12}>
              {/* Time, Servings and Save */}
              <Box mt="5px">
                <Stack direction="row" gap={0.5} alignItems="center">
                  <AccessTimeOutlined
                    sx={{
                      fontSize: 20,
                      color: '#11142d'
                    }}
                  />
                  <Typography fontSize={16} color="#808191">
                    {recipe.estimateTime} mins
                  </Typography>
                  <RestaurantOutlined
                    sx={{
                      fontSize: 20,
                      color: '#11142d',
                      ml: 1
                    }}
                  />
                  <Typography fontSize={16} color="#808191">
                    {recipe.servings} servings
                  </Typography>
                  <IconButton>
                    <StarBorderOutlined />
                  </IconButton>
                </Stack>
              </Box>
              {/* Description */}
              <Box mt="15px">
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: '#11142d'
                  }}
                >
                  Description
                </Typography>
                <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
                  {recipe.description}
                </Typography>
              </Box>
              {/* Ingredients */}
              <Box mt="15px">
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: '#11142d'
                  }}
                >
                  Ingredients
                </Typography>
                <Stack direction="column">
                  {recipe.ingredients.map((ingredient: Ingredient, index: number) => (
                    <Stack direction="row" gap="10px" key={index}>
                      <Typography>
                        {ingredient.name}
                        {' - '}
                        {ingredient.amount} {ingredient.unit}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
              <Box mt="15px">
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: '#11142d'
                  }}
                >
                  Steps
                </Typography>
                <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
                  {recipe.steps}
                </Typography>
              </Box>
              <Box mt="15px">
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: '#11142d'
                  }}
                >
                  Tips and Tricks
                </Typography>
                <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
                  {recipe.tips}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </MainCard>
  );
};

export default RecipeDetails;
