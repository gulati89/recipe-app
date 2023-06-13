// third-party
import { FormattedMessage } from 'react-intl';
// assets
import { KitchenOutlined, FoodBankOutlined } from '@mui/icons-material';
// type
import { NavItemType } from 'types/menu';

// icons
const icons = { KitchenOutlined, FoodBankOutlined };

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other: NavItemType = {
  id: 'group-pages',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  children: [
    {
      id: 'recipes',
      title: <FormattedMessage id="recipes" />,
      type: 'item',
      url: '/recipes',
      breadcrumbs: false,
      icon: icons.KitchenOutlined
    },
    {
      id: 'create-recipe',
      title: <FormattedMessage id="create-recipe" />,
      type: 'item',
      url: '/createrecipe',
      breadcrumbs: false,
      icon: icons.FoodBankOutlined
    }
  ]
};

export default other;
