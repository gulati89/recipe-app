import { Link } from 'react-router-dom';
import { Typography, CardContent, Stack } from '@mui/material';
import { AccessTimeOutlined, RestaurantOutlined } from '@mui/icons-material';

import { RecipeCardProps } from 'types/recipe';
import MainCard from 'components/MainCard';

const RecipeCard = ({ _id, title, estimateTime, photo, servings }: RecipeCardProps) => {
  return (
    <MainCard
      component={Link}
      content={false}
      boxShadow
      to={`/recipedetails/${_id}`}
      sx={{
        p: '15px',
        cursor: 'pointer',
        display: 'block',
        '&:hover': {
          transform: 'scale3d(1.02, 1.02, 1)',
          transition: 'all .4s ease-in-out'
        }
      }}
    >
      {/*eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
      <img alt="recipe image" src={photo} style={{ width: '100%', height: '250px', borderRadius: '10px' }} />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '10px',
          paddingX: '5px'
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={500} color="#11142d">
            {title}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <AccessTimeOutlined
              sx={{
                fontSize: 18,
                color: '#11142d',
                mt: 0.5
              }}
            />
            <Typography fontSize={14} color="#808191">
              {estimateTime} mins
            </Typography>
            <RestaurantOutlined
              sx={{
                fontSize: 18,
                color: '#11142d',
                mt: 0.5,
                ml: 0.5
              }}
            />
            <Typography fontSize={14} color="#808191">
              {servings} servings
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </MainCard>
  );
};

export default RecipeCard;
