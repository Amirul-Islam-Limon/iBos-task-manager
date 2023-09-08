import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tasks from '../pages/Tasks';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import CreateTeam from '../pages/CreateTeam';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/create-team',
        element: <CreateTeam/>,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signUp',
        element: <SignUp/>
      },
    ],
  },
]);

export default routes;
