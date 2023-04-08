import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
         <div className="navbar bg-base-100">
  <div className="flex-1 space-x-96">
   <div>
     <a className="btn btn-ghost normal-case text-xl">daisyUI</a> 
     </div>
    <div className='bg-purple-400 rounded text-white'>
    <Link className='p-1 space-x-5 text-xl' to='/'>Home</Link >
         <Link className='p-1 text-xl' to='/about'>About us</Link>
         <Link className='p-1 text-xl' to='/blog'>Blog</Link >
         <Link className='p-1 text-xl' to='/contact'>Contact</Link>
         </div>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://cms-cdn.placeholder.co/Jono_Landon_1_84a0783743.svg?width=1920pg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Nav;