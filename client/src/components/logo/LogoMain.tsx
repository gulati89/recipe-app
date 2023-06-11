// material-ui
import logoMain from 'assets/images/recipe/logo-main.png';

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  return <img src={logoMain} alt="MyRecipes" width="100" />;
};

export default LogoMain;
