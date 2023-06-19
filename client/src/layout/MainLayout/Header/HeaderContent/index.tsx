// material-ui
import { Theme } from '@mui/material/styles';
import { Box, useMediaQuery, Typography } from '@mui/material';

// project import
import Profile from './Profile';
import useConfig from 'hooks/useConfig';
import DrawerHeader from 'layout/MainLayout/Drawer/DrawerHeader';

// type
import { LAYOUT_CONST } from 'types/config';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { menuOrientation } = useConfig();

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {menuOrientation === LAYOUT_CONST.HORIZONTAL_LAYOUT && !downLG && <DrawerHeader open={true} />}
      <Typography sx={{ width: '300px', ml: 1, color: '#FF4D00', fontSize: '1.2rem', fontFamily: 'system-ui', fontWeight: 800 }}>
        My Recipes Cookbook
      </Typography>
      <Box sx={{ width: '90%', ml: 1 }} />
      <Profile />
    </>
  );
};

export default HeaderContent;
