import {SquaresPlusIcon, Cog6ToothIcon, ChatBubbleOvalLeftEllipsisIcon, UserCircleIcon, LockOpenIcon} from '@heroicons/react/24/solid';

import logo from '../../assets/image/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 border-r-2 border-secondary/20">
      <div className="flex flex-col items-center gap-5 h-full py-5">
        <Link to="/"><img className='w-11' title='logo' src={logo} alt="logo" /></Link>
        <NavLink title='add task'
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'p-2 rounded-2xl bg-primary text-white cursor-pointer'
              : 'p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all'
          }
        >
          <SquaresPlusIcon className="h-7 w-7 group-hover:text-white" />
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive
              ? 'p-2 rounded-2xl bg-primary text-white cursor-pointer'
              : 'p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all'
          }
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? 'p-2 rounded-2xl bg-primary text-white cursor-pointer'
              : 'p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all'
          }
        >
          <Cog6ToothIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink title="profile"
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? 'p-2 rounded-2xl bg-primary text-white cursor-pointer '
              : 'p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all'
          }
        >
          <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink title="login"
          to="/login"
          className={({ isActive }) =>
            isActive
              ? 'p-2 rounded-2xl bg-primary text-white cursor-pointer '
              : 'p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all'
          }
        >
          <LockOpenIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
