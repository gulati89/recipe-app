import { useState, useEffect } from 'react';
import { FieldValues, useFieldArray, Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

// material-ui
import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  MenuItem,
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

//project imports
import { RecipeDetailProps } from 'types/recipe';
import MainCard from 'components/MainCard';
import useAuth from 'hooks/useAuth';
import { dispatch, useSelector } from 'store';
import { getRecipeUpdate } from 'store/reducers/recipe';
import { openSnackbar } from 'store/reducers/snackbar';
import Loader from 'components/Loader';

const UpdateRecipe = () => {
  const { user } = useAuth();
  const { recipe } = useSelector((state) => state.recipe);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [recipeImage, setRecipeImage] = useState({ name: recipe?.title, url: '' });

  useEffect(() => {
    if (!recipe) {
      navigate('/recipes', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultValues = {
    title: recipe?.title,
    description: recipe?.description,
    estimateTime: recipe?.estimateTime,
    servings: recipe?.servings,
    ingredients: recipe?.ingredients,
    steps: recipe?.steps,
    tips: recipe?.tips
  };

  const { handleSubmit, control } = useForm<RecipeDetailProps>({ mode: 'onChange', defaultValues });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
    rules: {
      required: 'Please add at least one ingredient'
    }
  });

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) => setRecipeImage({ name: file?.name, url: result }));
  };

  const submitForm = async (data: FieldValues) => {
    if (!recipeImage.name) return alert('Please select an image');
    if (data.ingredients.length === 0) return alert('Please add at least one ingredient');
    for (let i = 0; i < data.ingredients.length; i++) {
      const ingredient = data.ingredients[i];
      if (ingredient.name === '' || ingredient.amount === 0 || ingredient.amount === '0') {
        return alert('Please enter a valid ingredient. ');
      }
    }

    setIsLoading(true);
    const recipeData = {
      ...data,
      id: recipe?._id,
      photo: recipeImage.url ? recipeImage.url : recipe?.photo,
      email: user?.email
    };
    dispatch(getRecipeUpdate(recipeData)).then(() => {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Recipe Updated successfully',
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );
      setIsLoading(false);
      navigate('/recipes', { replace: true });
    });
  };

  return (
    <MainCard>
      {isLoading && <Loader />}
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Update Recipe
      </Typography>
      <Box p="20px">
        <form
          style={{
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
          onSubmit={handleSubmit(submitForm)}
        >
          {/* Recipe Name */}
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                m: '10px 0',
                fontSize: 16,
                color: '#11142d'
              }}
            >
              Recipe name
            </FormHelperText>
            <Controller
              control={control}
              name="title"
              render={({ field }) => <TextField {...field} fullWidth required id="outlined-basic" color="info" variant="outlined" />}
            />
          </FormControl>
          {/* Recipe Description */}
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                m: '10px 0',
                fontSize: 16,
                color: '#11142d'
              }}
            >
              Description
            </FormHelperText>
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <TextareaAutosize
                  {...field}
                  minRows={5}
                  required
                  placeholder="Write the description here..."
                  color="info"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    fontSize: '16px',
                    borderColor: 'rgba(0,0,0,0.23)',
                    borderRadius: 6,
                    padding: 10,
                    color: '#11142d'
                  }}
                />
              )}
            />
          </FormControl>
          <Stack direction="row" gap={4}>
            {/* Estimate Time */}
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  m: '10px 0',
                  fontSize: 16,
                  color: '#11142d'
                }}
              >
                Estimate Time
              </FormHelperText>
              <Controller
                control={control}
                name="estimateTime"
                render={({ field }) => (
                  <Select
                    {...field}
                    variant="outlined"
                    color="info"
                    displayEmpty
                    required
                    inputProps={{
                      'aria-label': 'Without label'
                    }}
                  >
                    <MenuItem value={5}>5 minutes</MenuItem>
                    <MenuItem value={10}>10 minutes</MenuItem>
                    <MenuItem value={15}>15 minutes</MenuItem>
                    <MenuItem value={20}>20 minutes</MenuItem>
                    <MenuItem value={30}>30 minutes</MenuItem>
                    <MenuItem value={45}>45 minutes</MenuItem>
                    <MenuItem value={60}>60 minutes</MenuItem>
                    <MenuItem value={90}>90 minutes</MenuItem>
                    <MenuItem value={120}>120 minutes</MenuItem>
                    <MenuItem value={180}>180 minutes or more</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            {/* Servings */}
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  m: '10px 0',
                  fontSize: 16,
                  color: '#11142d'
                }}
              >
                Servings
              </FormHelperText>
              <Controller
                control={control}
                name="servings"
                render={({ field }) => (
                  <Select
                    {...field}
                    variant="outlined"
                    color="info"
                    displayEmpty
                    required
                    inputProps={{
                      'aria-label': 'Without label'
                    }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10 or more</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Stack>
          {/* Ingredients */}
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                m: '10px 0',
                fontSize: 16,
                color: '#11142d'
              }}
            >
              Ingredients
            </FormHelperText>
            <Box sx={{ listStyleType: 'none' }}>
              {fields.map((field, index) => (
                <ListItem key={field.id} sx={{ px: 0 }}>
                  <ListItemText
                    sx={{
                      flex: 1,
                      justifyContent: 'center',
                      alignContent: 'space-between',
                      mr: '10px'
                    }}
                  >
                    <Controller
                      control={control}
                      name={`ingredients.${index}.name`}
                      render={({ field }) => <TextField {...field} placeholder="Name" fullWidth color="info" />}
                    />
                  </ListItemText>

                  <ListItemText
                    sx={{
                      flex: 1,
                      justifyContent: 'center',
                      alignContent: 'space-between',
                      mx: '10px'
                    }}
                  >
                    <Controller
                      control={control}
                      name={`ingredients.${index}.amount`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type="number"
                          InputProps={{
                            inputProps: {
                              min: 0,
                              step: 0.01
                            }
                          }}
                          placeholder="Amount"
                          fullWidth
                          color="info"
                        />
                      )}
                    />
                  </ListItemText>

                  <ListItemText
                    sx={{
                      flex: 1,
                      justifyContent: 'center',
                      alignContent: 'space-between',
                      ml: '10px'
                    }}
                  >
                    <Controller
                      control={control}
                      name={`ingredients.${index}.unit`}
                      render={({ field }) => <TextField {...field} placeholder="Unit" fullWidth color="info" />}
                    />
                  </ListItemText>

                  <ListItemSecondaryAction sx={{ flex: 1 }}>
                    <IconButton
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
              <ListItem sx={{ justifyContent: 'center', px: 0 }}>
                <Button
                  title="Add Ingredient"
                  onClick={() => {
                    append({
                      name: '',
                      amount: 0,
                      unit: ''
                    });
                  }}
                  fullWidth
                  variant="contained"
                >
                  <Add />
                </Button>
              </ListItem>
            </Box>
          </FormControl>
          {/* Image */}
          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#11142d" fontSize={16} fontWeight={500} my="10px">
                Photo
              </Typography>
              <Button
                component="label"
                sx={{
                  width: 'fit-content',
                  color: '#2ed480',
                  textTransform: 'capitalize',
                  fontSize: 16
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0]);
                  }}
                />
              </Button>
            </Stack>
            <Typography fontSize={14} color="#808191" sx={{ wordBreak: 'break-all' }}>
              {recipeImage?.name}
            </Typography>
          </Stack>
          {/* Steps */}
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                m: '10px 0',
                fontSize: 16,
                color: '#11142d'
              }}
            >
              Steps
            </FormHelperText>
            <Controller
              control={control}
              name="steps"
              render={({ field }) => (
                <TextareaAutosize
                  {...field}
                  minRows={5}
                  required
                  placeholder="Write the steps here..."
                  color="info"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    fontSize: '16px',
                    borderColor: 'rgba(0,0,0,0.23)',
                    borderRadius: 6,
                    padding: 10,
                    color: '#11142d'
                  }}
                />
              )}
            />
          </FormControl>
          {/* Tips */}
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                m: '10px 0',
                fontSize: 16,
                color: '#11142d'
              }}
            >
              Tips and Tricks
            </FormHelperText>
            <Controller
              control={control}
              name="tips"
              render={({ field }) => (
                <TextareaAutosize
                  {...field}
                  minRows={5}
                  required
                  placeholder="Write the tips here..."
                  color="info"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    fontSize: '16px',
                    borderColor: 'rgba(0,0,0,0.23)',
                    borderRadius: 6,
                    padding: 10,
                    color: '#11142d'
                  }}
                />
              )}
            />
          </FormControl>
          {/* Submit Button */}
          <Button type="submit" title="Submit" fullWidth variant="contained">
            Update Recipe
          </Button>
        </form>
      </Box>
    </MainCard>
  );
};

export default UpdateRecipe;
