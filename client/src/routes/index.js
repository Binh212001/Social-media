import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/home/Home';
import PeoplePage from '../pages/people/PeoplePage';
import Profile from '../pages/profile/Profile';
import path from './path';

export const publicRoute = [
  {
    path: path.register,
    element: <Register />,
  },
  {
    path: path.login,
    element: <Login />,
  },
];

export const privateRoute = [
  {
    path: path.home,
    element: <Home />,
    private: true,
  },
  {
    path: path.people,
    element: <PeoplePage />,
    private: true,
  },

  {
    path: path.profile,
    element: <Profile />,
    private: true,
  },
];
