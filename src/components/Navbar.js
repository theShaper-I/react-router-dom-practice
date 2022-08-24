import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar mx-auto flex text-xl mb-10 bg-black py-4 p-4 block gap-4'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'text-red-600' : 'text-green-600')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'text-red-600' : 'text-green-600')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'text-red-600' : 'text-green-600')}
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'text-red-600' : 'text-green-600')}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;