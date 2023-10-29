import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
const Overview = Loader(lazy(() => import('src/content/overview')));

// Auth pages
const Login = Loader(lazy(() => import('src/content/pages/Login/JwtLogin')));
const Register = Loader(lazy(() => import('src/content/pages/Register/JwtRegister')));
const ForgotPassword = Loader(lazy(() => import('src/content/pages/ForgotPassword')));



const Tests = Loader(lazy(() => import('src/content/pages/Tests/index')));
const Course = Loader(lazy(() => import('src/content/applications/Course/index')));

const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);

const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);



// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: 'auth',
        children: [
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'signup',
            element: <Register />
          },
          {
            path: 'forgot-password',
            element: <ForgotPassword />
          }
        ]
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'main',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="tasks" replace />
      },
      {
        path: 'tests/:testId',
        element: <Tests />
      },
      {
        path: 'courses/:courseId',
        element: <Course />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  }
];

export default routes;
