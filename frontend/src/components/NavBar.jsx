import React, {Fragment, useState} from 'react';
import {Menu, Transition} from "@headlessui/react";
import {BiChevronDown} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {HiMenuAlt3} from "react-icons/hi";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';
import  CustomBtn  from '../components/CustomBtn';
import {users} from '../utils/data';

 function MenuList() {

  const handleLogout = () => {
    return(
      <div>
        <Menu as='div' className="inLine-block text-left">
          <div className='flex'>
            <Menu.Button className="inline-flex gap-2 w-full rounded-md bg-red-500 md:px-4 py-2 text-sm font-meduim text-slate-700 hover:bg-opacity-20">
              <div className='leading-[80px] flex flex-col items-start'>
                <p className='text-sm font-semibold'>{user?.firstName?? user?.name}</p>
                <span className='text-sm text-blue-600'>{user?.jobtitle ?? user?.email}</span>
              </div>
            </Menu.Button>

          </div>

        </Menu>
      </div>
    )
  }
 }
const NavBar = () => {
  const user = users[1];
  console.log(user)
  const [isopen, setIsOpen] = useState(false);

  const handleClosedNavBar = () => {
      setIsOpen((prev) => !prev);
  }
return (
<>
  <nav className='w-1439px h-98px flex item-center justify-around bg-[#ffffff] py-4'>
      <div className='text-[#D32242] font-inter font-bold italic text-xl leading-6'>AppTrack</div>

      <div>
        <ul className='flex  w-hug   p-2 gap-10 mr-14 font-bold '>
              <li className=''>
                  <Link to='/'  className="hover:underline hover:text-[#D32242] ">Home</Link>
              </li>
              <li>
                  <Link to='/jobs'  className="hover:underline hover:text-[#D32242] ">Jobs</Link>
              </li>
              <li>
                  <Link to='/companies'  className="hover:underline hover:text-[#D32242]">Companies</Link>
              </li> 
          </ul> </div>
      <div className='hidden lg:block'>
          {
              !user?.token ? (
                  <Link to='/user-auth'>
                    <CustomBtn title="Login"
                    
                    containerStyles="text-white bg-[#D32242] py-1.5 px-10 border-none rounded-full font-bold"/>
                  </Link>
              ): (
                <div>
                  <MenuList user={user}/>
                </div>
          )}
          </div>      
  </nav>

  </>
);
}

export default NavBar