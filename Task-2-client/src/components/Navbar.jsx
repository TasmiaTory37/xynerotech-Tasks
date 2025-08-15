import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/services'>Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/about'>About</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/contact'>Contact</NavLink></li>
        
          
      </ul>
    </div>
      <div className='flex justify-center items-center gap-1'>
              <img className='w-[50px] h-[50px]' src={logo} alt="Logo" />
              <Link to='/' className="text-blue-500 font-bold text-xl">QuickServe</Link>
            </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/services'>Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/about'>About</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/contact'>Contact</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn bg-blue-600 text-white">Login</button>

  </div>
</div>
            
        </div>
    );
};

export default Navbar;