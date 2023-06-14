import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// pages routing
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

// render - applications
const RecipeList = Loadable(lazy(() => import('pages/recipe-app/recipe-list')));
const CreateRecipe = Loadable(lazy(() => import('pages/recipe-app/create-recipe')));
const RecipeDetails = Loadable(lazy(() => import('pages/recipe-app/recipe-details')));
const UpdateRecipe = Loadable(lazy(() => import('pages/recipe-app/update-recipe')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'recipes',
          element: <RecipeList />
        },
        {
          path: 'createrecipe',
          element: <CreateRecipe />
        },
        {
          path: 'recipedetails/:id',
          element: <RecipeDetails />
        },
        {
          path: 'updaterecipe',
          element: <UpdateRecipe />
        }
      ]
    },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    }
  ]
};

export default MainRoutes;
