import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const { isAuth, userInfo } = useContext(UserContext);
  const location = useLocation();

  const onLogout = () => {
    // Handle logout logic
  };

  return (
    <>
      <nav className='w-1439px h-98px flex item-center justify-around bg-[#ffffff] py-4'>
        <Link to='/'>
          <h2 className='text-[#D32242] font-inter font-bold italic text-xl leading-6'>Aplitrack</h2>
        </Link>
        <div>
          <ul className='flex  w-hug   p-2 gap-10 mr-14 font-bold '>
            <li>
              <Link to='/' className="hover:underline hover:text-[#D32242] ">Home</Link>
            </li>
            <li>
              <Link to='/jobs' className="hover:underline hover:text-[#D32242] ">Jobs</Link>
            </li>
            <li>
              <Link to='/companies' className="hover:underline hover:text-[#D32242]">Companies</Link>
            </li>
          </ul>
        </div>
        <div className='space-y-2 '>
        {isAuth ? (
            <>
              <p className="inline-block w-full px-4 py-2 text-center text-white">
                Welcome, {userInfo?.username}
              </p>
              <button
                onClick={onLogout}
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
              </button>
            </>
          ) : (
            <>
            {location.pathname === '/jobs' ? (
             <Link to='/user-auth'> 
             <button className="border-1 bg-[#D32242] w-[155px] h-[40px] rounded-full text-white font-bold">
                Get Started
              </button></Link>
            ) : (
              <Link to="/login">
                <button className="border-1 bg-[#D32242] w-[155px] h-[40px] rounded-full text-white font-bold">
                  Login
                </button>
              </Link>
            )}
          </>
        )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;